import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ArrowBack, IconInternetActive} from '../../../Assets/Assets';
import {inTvAccountAction} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

const ListPaymentInternetTv = props => {
  const [input, setInput] = useState('');
  const title = props.route.params;
  console.log(title, '<<<<< ini InternetTV');
  const DataCostomer = useSelector(state => state.GlobalReducer.Success);
  console.log(DataCostomer, 'status datacostumer');
  const dispatch = useDispatch();

  const submitDataCostomer = () => {
    dispatch(
      inTvAccountAction({
        customer_number: input,
      }),
    );
  };
  useEffect(() => {}, [DataCostomer]);

  const styles = StyleSheet.create({
    Grow: {
      flexGrow: 1,
    },
    container: {
      paddingBottom: moderateScale(1),
      backgroundColor: 'white',
    },
    ContainerHeaderPayment: {
      backgroundColor: '#263765',
      height: heightPercentageToDP(13),
      borderBottomLeftRadius: moderateScale(16),
      borderBottomRightRadius: moderateScale(16),
    },
    HeaderPayment: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: moderateScale(12),
      marginLeft: moderateScale(34),
      marginRight: moderateScale(36),
    },
    ArrowBack: {
      height: heightPercentageToDP(2),
      width: widthPercentageToDP(6),
    },
    Judul: {
      marginLeft: moderateScale(16),
      color: 'white',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
    },
    ContainerListPayment: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    ContainerLogo: {
      marginLeft: widthPercentageToDP(8),
      marginTop: heightPercentageToDP(2),
      width: widthPercentageToDP(8),
      height: heightPercentageToDP(4),
      backgroundColor: 'white',
      opacity: 0.9,
      borderRadius: moderateScale(8),
    },
    Logo: {
      alignSelf: 'center',
      width: widthPercentageToDP(4),
      height: heightPercentageToDP(4),
    },
    ContainerText: {
      marginTop: moderateScale(21),
      marginLeft: moderateScale(12),
    },
    TextList: {
      color: '#ffffff',
      fontSize: moderateScale(13),
      fontFamily: 'Montserrat-Regular',
    },
    Containerisi: {
      marginTop: moderateScale(40),
      marginLeft: moderateScale(20),
      marginRight: moderateScale(20),
      height: heightPercentageToDP(16),
      borderTopStartRadius: moderateScale(8),
      borderTopEndRadius: moderateScale(8),
      borderBottomStartRadius: moderateScale(8),
      borderBottomEndRadius: moderateScale(8),
      backgroundColor: '#EBEDF4',
    },
    ContainerTextInput: {
      marginLeft: moderateScale(24),
      marginTop: moderateScale(24),
    },
    TextHeadNometer: {
      color: '#263765',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
    },
    inputNoMeter: {
      borderRadius: moderateScale(4),
      height: moderateScale(44),
      width: moderateScale(290),
      marginTop: moderateScale(4),
      backgroundColor: DataCostomer ? 'white' : '#FFF4F7',
    },
    TextNotRegister: {
      paddingTop: moderateScale(4),
      alignSelf: 'center',
      color: DataCostomer ? '#EBEDF4' : '#EB5757',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
    },
    ContainerHarga: {
      height: heightPercentageToDP(59),
      marginTop: moderateScale(24),
      backgroundColor: '#C3CADE',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    ContainerButtonHarga: {
      marginTop: heightPercentageToDP(2),
      marginLeft: moderateScale(28),
    },
    NummberButton: {
      height: moderateScale(70),
      width: moderateScale(150),
      borderTopStartRadius: moderateScale(6),
      borderTopEndRadius: moderateScale(6),
      borderBottomStartRadius: moderateScale(6),
      borderBottomEndRadius: moderateScale(6),
      alignItems: 'center',
    },
    TextNumber: {
      marginTop: moderateScale(24),
      color: '#000000',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
    },
    ContainerButtonConfirm: {
      marginLeft: moderateScale(27),
      marginTop: moderateScale(25),
      marginBottom: moderateScale(24),
    },
    ButtonConfirm: {
      backgroundColor: '#4493AC',
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      borderBottomStartRadius: moderateScale(5),
      borderBottomEndRadius: moderateScale(5),
      height: heightPercentageToDP(6),
      width: widthPercentageToDP(87),
      alignItems: 'center',
    },
    TextButtonConfirm: {
      color: 'white',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
      paddingTop: moderateScale(11),
    },
    ContainPaket: {
      height: moderateScale(90),
      width: moderateScale(150),
      borderTopStartRadius: moderateScale(6),
      borderTopEndRadius: moderateScale(6),
      borderBottomStartRadius: moderateScale(6),
      borderBottomEndRadius: moderateScale(6),
      margin: moderateScale(16),
    },
    TitlePaket: {
      color: '#000000',
      fontSize: moderateScale(14),
      fontFamily: 'Montserrat-Bold',
    },
    ContainerTextPaket: {
      marginTop: moderateScale(8),
      width: moderateScale(300),
    },
    IsiPaket: {
      color: '#000000',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
    },
    HargaPaket: {
      marginTop: moderateScale(12),
      color: '#000000',
      fontSize: moderateScale(14),
      fontFamily: 'Montserrat-Bold',
      alignSelf: 'flex-end',
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeaderPayment}>
          <View style={styles.HeaderPayment}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Internet & TV</Text>
          </View>
          <View>
            <View style={styles.ContainerListPayment}>
              <View style={styles.ContainerLogo}>
                <FastImage
                  style={styles.Logo}
                  source={IconInternetActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.ContainerText}>
                <Text style={styles.TextList}>{title}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Text Input} */}
        <View style={styles.Containerisi}>
          <View style={styles.ContainerTextInput}>
            <Text style={styles.TextHeadNometer}>No. Customer</Text>
            <TextInput
              style={styles.inputNoMeter}
              onChangeText={setInput}
              value={input}
              placeholder=" E.g 141234567890"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.TextNotRegister}>Number Not Registered</Text>
        </View>
        {/* {pencetan nilai harga} */}
        <View style={{marginTop: moderateScale(350)}}>
          <TouchableOpacity
            onPress={submitDataCostomer}
            style={styles.ContainerButtonConfirm}>
            <View style={styles.ButtonConfirm}>
              <Text style={styles.TextButtonConfirm}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentInternetTv;
