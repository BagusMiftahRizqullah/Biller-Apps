import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  IconFilter,
  IconElectricity,
  InfoSubscription,
  PLN,
} from '../../Assets/Assets';
import {COLOR} from '../../Assets/Color/Color';

const PaymentCard = ({late = false, success = false, ongoing = false}) => {
  const styles = StyleSheet.create({
    ContainerRes: {
      display: 'flex',
      borderRadius: moderateScale(20),
      backgroundColor: 'white',
      width: widthPercentageToDP(90),
      height: ongoing
        ? moderateScale(285)
        : late
        ? moderateScale(353)
        : moderateScale(319),
      alignSelf: 'center',
      marginTop: moderateScale(18),
      marginBottom: moderateScale(8),
      elevation: 10,
    },
    ContainerFild: {
      display: 'flex',
      borderRadius: moderateScale(20),
      backgroundColor: 'white',
      width: widthPercentageToDP(90),
      height: ongoing ? moderateScale(248) : heightPercentageToDP(40),
      alignSelf: 'center',
      paddingLeft: widthPercentageToDP(5),
    },
    resText: {
      color: '#263765',
      fontWeight: 'bold',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    status: {
      backgroundColor: late ? '#EB5757' : ongoing ? '#263765' : '#4493AC',
      borderTopStartRadius: moderateScale(20),
      borderTopEndRadius: moderateScale(20),
      height: heightPercentageToDP(5),
      padding: moderateScale(10),
      flexDirection: 'row',
    },
    textStatus: {
      color: 'white',
      fontSize: moderateScale(9),
      fontFamily: 'Montserrat-Regular',
      paddingLeft: moderateScale(10),
    },
    textResStatus: {
      color: 'white',
      fontSize: moderateScale(10),
      fontFamily: 'Montserrat-Bold',
      paddingLeft: moderateScale(5),
    },
    StatusBilled: {
      color: '#263765',
      fontSize: moderateScale(11),
      fontFamily: 'Montserrat-Bold',
      alignSelf: 'flex-end',
      // padding: moderateScale(18),
      marginTop: moderateScale(13),
      marginRight: moderateScale(9),
    },
    containerbill: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingRight: widthPercentageToDP(9),
      marginTop: moderateScale(23),
      marginBottom: moderateScale(-8),
      // backgroundColor: 'black',
    },
    ContainerIconPayment: {
      display: 'flex',
      borderRadius: moderateScale(5),
      backgroundColor: '#EBEDF4',
      width: moderateScale(32),
      height: moderateScale(32),
      paddingTop: moderateScale(10),
    },

    IconPayment: {
      height: moderateScale(11),
      width: moderateScale(18),
      alignSelf: 'center',
    },
    ContainerListBill: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'white',
    },
    //nama List
    TextIcon1: {
      color: '#333333',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      marginLeft: moderateScale(24),
      paddingRight: moderateScale(100),
      backgroundColor: 'white',
    },
    TextIcon2: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      marginLeft: moderateScale(24),
    },
    // Uang
    TextIcon3: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',

      paddingLeft: moderateScale(2),
    },
    CountDayLeft: {
      marginTop: moderateScale(28),
      flexDirection: 'row',
    },
    TextCount: {
      color: '#EB5757',
      fontSize: moderateScale(10),
      fontFamily: 'Montserrat-Bold',
    },
    TextCount2: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      paddingLeft: widthPercentageToDP(21),
      paddingRight: moderateScale(100),
    },
    ContainerTotalCount: {
      paddingRight: moderateScale(20),
      paddingTop: ongoing
        ? moderateScale(20)
        : late
        ? moderateScale(10)
        : moderateScale(20),
      marginTop: ongoing
        ? moderateScale(10)
        : late
        ? moderateScale(10)
        : moderateScale(14),
      // backgroundColor: 'red',
    },
    TotalCount: {
      backgroundColor: '#EBEDF4',
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      borderBottomStartRadius: moderateScale(5),
      borderBottomEndRadius: moderateScale(5),
      height: heightPercentageToDP(6),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: moderateScale(10),
      paddingLeft: moderateScale(10),
    },
    TextTotal: {
      color: '#000000',
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
    },
    TextTotalCount: {
      color: '#000000',
      fontSize: 12,
      fontFamily: 'Montserrat-Bold',
    },
    ButtonPay: {
      backgroundColor: '#4493AC',
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      borderBottomStartRadius: moderateScale(5),
      borderBottomEndRadius: moderateScale(5),
      height: heightPercentageToDP(6),
      width: widthPercentageToDP(80),
      alignItems: 'center',
      marginTop: ongoing
        ? moderateScale(16)
        : late
        ? moderateScale(0)
        : moderateScale(16),
    },
    ContainerButton: {
      alignItems: 'center',
      paddingRight: widthPercentageToDP(5),
      marginTop: ongoing
        ? moderateScale(2)
        : late
        ? moderateScale(20)
        : moderateScale(15),
      // backgroundColor: 'black',
    },
    TextButton: {
      color: 'white',
      fontSize: moderateScale(21),
      fontFamily: 'Montserrat-Bold',
      paddingTop: moderateScale(5),
    },
    ContainerInfoSubscription: {
      alignItems: 'center',
      paddingRight: widthPercentageToDP(5),
    },
    InfoSubscriptionStyle: {
      height: moderateScale(116),
      width: moderateScale(308),
    },
    TextInfoContainer: {
      position: 'absolute',
      margin: moderateScale(28),
    },
    TextInfo1: {
      color: COLOR.purple.purpleBold,
      fontSize: moderateScale(11),
      fontFamily: 'Montserrat-Regular',
    },
  });
  return (
    <View style={styles.ContainerRes}>
      {ongoing ? (
        <View style={styles.status}>
          <Text style={styles.textStatus}> Complete your payment in</Text>
          <Text style={styles.textResStatus}> 59min 59s </Text>
        </View>
      ) : (
        <View style={styles.status}>
          <Text style={styles.textStatus}> Last payment date:</Text>
          <Text style={styles.textResStatus}> 30 May 2021</Text>
        </View>
      )}
      <View style={styles.ContainerFild}>
        {ongoing ? null : (
          <Text style={styles.StatusBilled}>Billed Every Monday</Text>
        )}

        {/* LIST PAYMENT */}
        <View style={styles.containerbill}>
          <View style={styles.ContainerIconPayment}>
            <FastImage
              style={styles.IconPayment}
              source={PLN}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.ContainerListBill}>
            <View>
              <Text style={styles.TextIcon1}>PLN - Token</Text>
              <Text style={styles.TextIcon2}>141234567890</Text>
            </View>
            <Text style={styles.TextIcon3}>Rp.51.500</Text>
          </View>
        </View>
        <View style={styles.containerbill}>
          <View style={styles.ContainerIconPayment}>
            <FastImage
              style={styles.IconPayment}
              source={PLN}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.ContainerListBill}>
            <View>
              <Text style={styles.TextIcon1}>PLN - Token</Text>
              <Text style={styles.TextIcon2}>141234567890</Text>
            </View>
            <Text style={styles.TextIcon3}>Rp. 51.500</Text>
          </View>
        </View>
        {late ? (
          <View style={styles.CountDayLeft}>
            <Text style={styles.TextCount}>1 day late payment fee (0,5%)</Text>
            <Text style={styles.TextCount2}>Rp. 5.150</Text>
          </View>
        ) : null}
        <View style={styles.ContainerTotalCount}>
          <View style={styles.TotalCount}>
            <Text style={styles.TextTotal}>Total</Text>
            <Text style={styles.TextTotalCount}>Rp. 108.150</Text>
          </View>
        </View>
        {success ? (
          <View style={styles.ContainerInfoSubscription}>
            <FastImage
              style={styles.InfoSubscriptionStyle}
              source={InfoSubscription}
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
              <Text style={styles.TextInfo1}>
                Your bill will be avalible in 9 June 2021 Pay withing 7 day to
                avoid late payment fee
              </Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.ContainerButton}>
            {ongoing ? (
              <View style={styles.ButtonPay}>
                <Text style={styles.TextButton}>Confirm Payment</Text>
              </View>
            ) : (
              <View style={styles.ButtonPay}>
                <Text style={styles.TextButton}>Pay</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PaymentCard;
