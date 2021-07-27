import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ArrowBack} from '../../Assets/Assets';
import {LandlineAccountAction} from './redux/action';
//
const Landline = props => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [pres, setPres] = useState('');

  const DataCostomer = useSelector(state => state.GlobalReducer.Success);
  console.log(DataCostomer, 'status datacostumer');

  const submitDataCostomer = () => {
    dispatch(
      LandlineAccountAction({
        telephone_number: input,
      }),
    );
  };
  useEffect(() => {}, [DataCostomer]);

  const styles = StyleSheet.create({
    Grow: {
      flexGrow: 1,
    },
    container: {
      paddingBottom: moderateScale(8),
      backgroundColor: 'white',
    },
    ContainerHeaderPayment: {
      backgroundColor: '#263765',
      height: heightPercentageToDP(10),
      borderBottomLeftRadius: moderateScale(16),
      borderBottomRightRadius: moderateScale(16),
    },
    HeaderPayment: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: moderateScale(24),
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
      height: heightPercentageToDP(15),
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
      height: moderateScale(470),
      marginTop: moderateScale(24),
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
      marginTop: moderateScale(400),
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
            <Text style={styles.Judul}>Landline</Text>
          </View>
        </View>
        <View style={styles.Containerisi}>
          <View style={styles.ContainerTextInput}>
            <Text style={styles.TextHeadNometer}>Telephone number</Text>
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
        {/* landline */}

        <View style={styles.ContainerHarga}>
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

export default Landline;
