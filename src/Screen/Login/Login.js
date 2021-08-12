import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {FullLogo} from '../../Assets/Assets';
import {loginAction} from './redux/action';
import {actionLoading} from '../../Store/GlobalAction';
import Loading from '../../Component/Loading/Loading';
import LinearGradient from 'react-native-linear-gradient';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [longLoad, setLongLoad] = useState(true);
  const isLoading = useSelector(state => state.GlobalReducer.Loading);
  const isLogged = useSelector(state => state.GlobalReducer.isLogged);

  useEffect(() => {
    if (isLogged) {
      props.navigation.navigate('Mainapp');
    } else {
      props.navigation.navigate('Login');
    }
  }, [isLogged]);

  const submitLogin = () => {
    dispatch(
      loginAction({
        email: email,
        password: password,
      }),
    );
  };

  // Long Loading
  useEffect(() => {
    if (isLoading === false) {
      setInterval(() => {
        setLongLoad(false);
      }, 10000);
    }
    if (!longLoad) {
      dispatch(actionLoading(false));
      return;
    }
  }, [longLoad]);
  console.log(longLoad, 'ini longloadddd');

  return (
    <SafeAreaView>
      <ScrollView style={styles.containerScroll}>
        <KeyboardAvoidingView>
          {longLoad ? (
            <Loading />
          ) : (
            <>
              <LinearGradient
                colors={['#364F90', '#9CCCBE', '#FAC9D6']}
                start={{x: 1.0, y: 1.0}}
                end={{x: 0.1, y: 0.1}}
                locations={[0, 0.84, 1.0]}
                style={[styles.bigRect, styles.top]}>
                <View style={styles.containerHead}>
                  <FastImage
                    style={styles.imageBiller}
                    source={require('../../Assets/Images/FullLogo.png')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
              </LinearGradient>

              <View style={styles.topContainer}>
                <Text style={styles.text1}>Welcome Back!</Text>
                <View style={styles.textLogin}>
                  <Text style={styles.text2}>Don't have account? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({type: 'RESET_AUTH'});
                      props.navigation.navigate('SignUp');
                    }}>
                    <Text style={styles.text3}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                style={styles.textContainer1}
                placeholder="Email"
                placeholderTextColor="#999999"
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.textContainer2}
                placeholder="Password"
                placeholderTextColor="#999999"
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
              <TouchableOpacity
                onPress={submitLogin}
                style={styles.ContainerButtonSubs}>
                <View style={styles.ButtonSubs}>
                  <Text style={styles.TextButtonSubs}>Login</Text>
                </View>
              </TouchableOpacity>

              <View>
                <TouchableOpacity style={styles.buttonForgetPassword}>
                  <Text style={styles.textForgotPassword}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerPusat: {
    width: wp(100),
    height: hp(100),
    backgroundColor: 'white',
  },
  containerScroll: {
    paddingBottom: moderateScale(100),
  },
  bigRect: {
    height: moderateScale(380),
    width: moderateScale(382),
    opacity: 0.8,
    borderRadius: moderateScale(60),
    transform: [{rotate: '-45deg'}],
  },
  top: {
    position: 'absolute',
    top: moderateScale(-220),
    right: moderateScale(-110),
  },
  containerHead: {
    transform: [{rotate: '45deg'}],
    alignItems: 'flex-end',
    paddingTop: moderateScale(225),
    paddingRight: moderateScale(100),
  },
  imageBiller: {
    height: 100,
    width: 100,
  },
  StyleText: {
    color: 'black',
    fontSize: moderateScale(24),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
    alignSelf: 'center',
  },
  topContainer: {
    paddingLeft: wp(5),
    marginTop: moderateScale(250),
  },
  text1: {
    fontSize: moderateScale(26),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  textLogin: {
    flexDirection: 'row',
    fontSize: moderateScale(12),
    top: moderateScale(5),
  },
  text2: {
    color: '#999999',
  },
  text3: {
    textDecorationLine: 'underline',
    paddingLeft: moderateScale(5),
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textContainer1: {
    width: wp(90),
    height: moderateScale(42),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(35),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer2: {
    width: wp(90),
    height: moderateScale(42),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(21),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer3: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(50),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  textContainer4: {
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    top: moderateScale(65),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    marginTop: moderateScale(21),
    backgroundColor: '#4493AC',
    borderRadius: moderateScale(6),
    height: moderateScale(42),
    width: wp(90),
    elevation: moderateScale(3),
  },
  ButtonSubs: {
    color: 'white',
    fontSize: moderateScale(21),
    paddingTop: moderateScale(5),
    fontFamily: 'Montserrat-Bold',
  },
  TextButtonSubs: {
    alignSelf: 'center',
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(4),
  },
  buttonForgetPassword: {
    alignSelf: 'center',
    marginTop: moderateScale(32),
    marginBottom: moderateScale(50),
  },
  textForgotPassword: {
    fontSize: moderateScale(14),
    color: '#214457',
    textDecorationLine: 'underline',
  },
});
