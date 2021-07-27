import React from 'react';
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
import {IconCloseWhite, PLN, InfoPayment} from '../../Assets/Assets';
import {COLOR} from '../../Assets/Color/Color';

const NSSubscription = props => {
  return (
    <SafeAreaView
      style={{backgroundColor: '#263765', width: wp(100), height: hp(100)}}>
      <ScrollView
        style={{
          flexGrow: 1,
        }}>
        <View style={styles.topContainer}>
          <Text style={styles.text1}>Subscription</Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FastImage
              style={styles.closeIcon}
              source={IconCloseWhite}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.textTop}>
              <Text style={styles.textBill}>Billed every month at 12nd</Text>
            </View>
            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={PLN}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>

            <View style={styles.containerData1}>
              <View style={styles.containerToken}>
                <FastImage
                  style={styles.imageToken}
                  source={PLN}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.boxText}>
                <View style={styles.data1}>
                  <Text style={styles.textPLN}>PLN-Token</Text>
                  <Text style={styles.textNo}>141234567890</Text>
                </View>
                <Text style={styles.data2}>Rp. 51.500</Text>
              </View>
            </View>
            <View style={styles.containerTotal}>
              <View style={styles.totalHarga}>
                <Text style={styles.textTotal1}>Total</Text>
                <Text style={styles.textTotal2}>Rp. 103.000</Text>
              </View>
            </View>
            <View style={styles.ContainerInfoSubscription}>
              <FastImage
                style={styles.InfoSubscriptionStyle}
                source={InfoPayment}
                resizeMode={FastImage.resizeMode.contain}
              />
              <View style={styles.TextInfoContainer}>
                <Text style={styles.TextInfo1}>
                  Next payment will due {''}
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      color: COLOR.purple.purpleBold,
                    }}>
                    14 June 2022
                  </Text>
                </Text>
                <Text style={styles.TextInfo2}>
                  Your bill will be avalible in 9 June 2021
                </Text>
                <Text style={styles.TextInfo3}>
                  Pay withing 7 day to avoid late payment fee
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tombolHome}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Text style={styles.textToHome}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NSSubscription;

const styles = StyleSheet.create({
  closeIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
    top: moderateScale(23),
  },
  topContainer: {
    flexDirection: 'row',
    top: moderateScale(10),
    height: hp(10),
    width: wp(86),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  text1: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(20),
  },
  boxContainer: {
    width: moderateScale(332),
    height: moderateScale(315),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: moderateScale(16),
    top: moderateScale(20),
  },
  mainContainer: {
    width: wp(100),
    height: hp(80),
  },
  textTop: {
    top: moderateScale(20),
    width: wp(78),
    alignSelf: 'center',
  },
  textBill: {
    alignSelf: 'flex-end',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    color: '#364F90',
  },
  containerData1: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // top: moderateScale(41),
    width: moderateScale(292),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    top: moderateScale(30),
  },
  containerToken: {
    width: moderateScale(32),
    height: moderateScale(32),
    backgroundColor: '#EBEDF4',
  },
  imageToken: {
    width: moderateScale(18),
    height: moderateScale(11),
    alignSelf: 'center',
    top: moderateScale(9),
  },
  boxText: {
    flexDirection: 'row',
    width: moderateScale(252),
    left: moderateScale(10),
    justifyContent: 'space-between',
  },
  data1: {},
  textPLN: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  textNo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#828282',
  },
  data2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#333333',
  },
  containerTotal: {
    backgroundColor: '#EBEDF4',
    marginTop: moderateScale(20),
    width: moderateScale(308),
    height: moderateScale(40),
    alignSelf: 'center',
    top: moderateScale(20),
    borderRadius: moderateScale(4),
  },
  totalHarga: {
    width: moderateScale(292),
    height: moderateScale(38),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textTotal1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    top: moderateScale(9),
    color: '#000000',
  },
  textTotal2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    top: moderateScale(9),
    color: '#000000',
  },
  ContainerInfoSubscription: {
    alignItems: 'center',
  },
  InfoSubscriptionStyle: {
    height: moderateScale(90),
    width: moderateScale(308),
    top: moderateScale(30),
  },
  TextInfoContainer: {
    position: 'absolute',
    margin: moderateScale(26),
    top: moderateScale(25),
    right: moderateScale(5),
  },
  TextInfo1: {
    color: COLOR.purple.purpleBold,
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  TextInfo2: {
    color: COLOR.purple.purpleBold,
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Regular',
    marginTop: moderateScale(5),
  },
  TextInfo3: {
    color: COLOR.purple.purpleBold,
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Regular',
  },
  tombolHome: {
    height: hp(10),
    alignSelf: 'center',
    bottom: moderateScale(40),
  },
  textToHome: {
    fontSize: moderateScale(10),
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
});
