import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ArrowBack} from '../../Assets/Assets';
import {IconPDAMActive} from '../../Assets/Assets';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {PDAMAccountAction} from './redux/action';

const NewPDAMBlank = props => {
  const [input, setInput] = useState('');
  const title = props.route.params;
  console.log(title, '<<<<< ini tempat PDAM');
  const dispatch = useDispatch();

  const submitDataCostomer = () => {
    dispatch(
      PDAMAccountAction({
        customerNumber: input,
      }),
    );
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'white', width: wp(100), height: hp(100)}}>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.headerTitle}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>PDAM</Text>
          </View>
          <View style={styles.headerLocation}>
            <View style={styles.containerIconPDAM}>
              <FastImage
                style={styles.iconPDAM}
                source={IconPDAMActive}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={styles.textLocation}>{title}</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.textNo}>No. Customer</Text>
          <TextInput
            style={styles.textInput}
            placeholder="E.g 00123456789"
            placeholderTextColor="#999999"
            keyboardType="numeric"
            onChangeText={text => setInput(text)}
          />
        </View>
        <TouchableOpacity onPress={submitDataCostomer}>
          <View style={styles.bottomButton}>
            <Text style={styles.textConfirm}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMBlank;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(134),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  headerTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: moderateScale(35),
    left: moderateScale(33),
  },
  ArrowBack: {
    height: hp(2),
    width: wp(6),
  },
  Judul: {
    marginLeft: moderateScale(16),
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  headerLocation: {
    flexDirection: 'row',
    paddingTop: moderateScale(30),
    left: moderateScale(33),
  },
  textLocation: {
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Regular',
    marginLeft: moderateScale(16),
    color: 'white',
    alignSelf: 'center',
  },
  containerIconPDAM: {
    width: moderateScale(27),
    height: moderateScale(27),
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
  },
  iconPDAM: {
    width: moderateScale(15),
    height: moderateScale(17),
    alignSelf: 'center',
    top: moderateScale(5),
  },
  middleContainer: {
    width: moderateScale(335),
    height: moderateScale(117),
    alignSelf: 'center',
    backgroundColor: '#EBEDF4',
    borderRadius: moderateScale(8),
    marginTop: moderateScale(32),
  },
  textNo: {
    paddingTop: moderateScale(18),
    left: moderateScale(23),
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    paddingBottom: moderateScale(10),
  },
  textInput: {
    backgroundColor: 'white',
    width: moderateScale(290),
    height: moderateScale(44),
    alignSelf: 'center',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  bottomButton: {
    width: moderateScale(332),
    height: moderateScale(55),
    borderRadius: moderateScale(8),
    backgroundColor: '#4493AC',
    alignSelf: 'center',
    marginTop: moderateScale(330),
  },
  textConfirm: {
    alignSelf: 'center',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    top: moderateScale(15),
  },
});
