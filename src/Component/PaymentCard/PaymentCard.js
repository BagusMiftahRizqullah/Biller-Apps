import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Overlay, BottomSheet} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  ButtonClose,
  IconElectricityActive,
  InfoSubscription,
} from '../../Assets/Assets';
import {RecurringBilling} from '../../Screen/Screen';
import {COLOR} from '../../Assets/Color/Color';

const PaymentCard = ({
  late = false,
  success = false,
  detail = false,
  navigation,
}) => {
  const styles = StyleSheet.create({
    ContainerRes: {
      display: 'flex',
      borderRadius: moderateScale(20),
      backgroundColor: 'white',
      width: widthPercentageToDP(90),
      height: heightPercentageToDP(50),
      alignSelf: 'center',
      marginBottom: moderateScale(16),
    },
    ContainerFild: {
      display: 'flex',
      borderRadius: moderateScale(20),
      backgroundColor: 'white',
      width: widthPercentageToDP(90),
      height: heightPercentageToDP(40),
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
      backgroundColor: late ? '#EB5757' : '#4493AC',
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
      padding: moderateScale(18),
    },

    containerbill: {
      paddingTop: moderateScale(10),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginRight: widthPercentageToDP(16),
    },

    ContainerIconPayment: {
      display: 'flex',
      borderRadius: moderateScale(5),
      backgroundColor: '#EBEDF4',
      width: widthPercentageToDP(9),
      height: heightPercentageToDP(5),
      marginRight: moderateScale(8),
    },
    // Icon Payment
    IconPayment: {
      height: heightPercentageToDP(5),
      width: widthPercentageToDP(3),
      alignSelf: 'center',
    },
    ContainerListBill: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    //nama List
    TextIcon1: {
      color: '#333333',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      paddingRight: moderateScale(79),
    },
    TextIcon2: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      paddingRight: moderateScale(79),
    },

    // Uang
    TextIcon3: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
      marginRight: moderateScale(8),
    },
    CountDayLeft: {
      paddingTop: moderateScale(20),
      flexDirection: 'row',
    },
    TextCount: {
      color: '#EB5757',
      fontSize: moderateScale(11),
      fontFamily: 'Montserrat-Bold',
      paddingRight: moderateScale(39),
    },
    // taotal uang
    TextCount2: {
      color: '#828282',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
    },

    ContainerTotalCount: {
      paddingRight: moderateScale(20),
      paddingTop: moderateScale(15),
    },

    TotalCount: {
      backgroundColor: '#EBEDF4',
      borderTopStartRadius: heightPercentageToDP(1),
      borderTopEndRadius: heightPercentageToDP(1),
      borderBottomStartRadius: heightPercentageToDP(1),
      borderBottomEndRadius: heightPercentageToDP(1),
      height: heightPercentageToDP(6),
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: moderateScale(10),
    },

    TextTotal: {
      color: '#000000',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
      paddingRight: moderateScale(168),
    },
    TextTotalCount: {
      color: '#000000',
      fontSize: moderateScale(12),
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
    },
    ContainerButton: {
      alignItems: 'center',
      paddingRight: widthPercentageToDP(5),
      marginTop: moderateScale(13),
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
    ContainerShowdetails: {
      marginTop: moderateScale(0),
    },
    Textshowdetails: {
      color: '#000000',
      fontSize: moderateScale(10),
      fontFamily: 'Montserrat-Regular',
      textDecorationLine: 'underline',
    },
    containerOverlay: {
      marginTop: moderateScale(410),
      width: widthPercentageToDP(100),
      height: heightPercentageToDP(46),
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: moderateScale(20),
      borderTopRightRadius: moderateScale(20),
      padding: moderateScale(43),
    },
    headerOverlay: {
      color: '#000000',
      fontSize: moderateScale(14),
      fontFamily: 'Montserrat-Regular',
    },
    ContainerForm: {
      paddingTop: moderateScale(16),
    },
    FormDetail1: {
      marginBottom: moderateScale(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    FormDetail2: {
      marginTop: moderateScale(12),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TextDataDetail: {
      color: '#000000',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
    },
    ResDetail: {
      color: '#000000',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
    },
    ContainerClose: {
      position: 'absolute',
      marginTop: moderateScale(18),
      right: moderateScale(24),
    },
    ButtonCloseStyle: {
      height: moderateScale(13),
      width: moderateScale(13),
    },
    HeaderBottmSheet: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.ContainerRes}>
      <View style={styles.status}>
        <Text style={styles.textStatus}> Last payment date:</Text>
        <Text style={styles.textResStatus}> 30 May 2021</Text>
      </View>
      <View style={styles.ContainerFild}>
        <Text style={styles.StatusBilled}>Billed Every Monday</Text>

        {/* LIST PAYMENT */}
        <View style={styles.containerbill}>
          <View style={styles.ContainerIconPayment}>
            <FastImage
              style={styles.IconPayment}
              source={IconElectricityActive}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.ContainerListBill}>
            <View>
              <Text style={styles.TextIcon1}>PLN - Token</Text>
              <Text style={styles.TextIcon2}>141234567890</Text>
              {detail ? (
                <TouchableOpacity
                  onPress={toggleOverlay}
                  style={styles.ContainerShowdetails}>
                  <Text style={styles.Textshowdetails}>show details</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={styles.TextIcon3}>Rp.5000000</Text>
          </View>
        </View>
        <View style={styles.containerbill}>
          <View style={styles.ContainerIconPayment}>
            <FastImage
              style={styles.IconPayment}
              source={IconElectricityActive}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.ContainerListBill}>
            <View>
              <Text style={styles.TextIcon1}>PLN - Token</Text>
              <Text style={styles.TextIcon2}>141234567890</Text>
              {detail ? (
                <TouchableOpacity
                  onPress={toggleOverlay}
                  style={styles.ContainerShowdetails}>
                  <Text style={styles.Textshowdetails}>show details</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <Text style={styles.TextIcon3}>Rp.500</Text>
          </View>
        </View>
        {late && navigation ? (
          <View style={styles.CountDayLeft}>
            <Text style={styles.TextCount}>1 day late payment fee (0,5%)</Text>
            <Text style={styles.TextCount2}>Rp.5000</Text>
          </View>
        ) : null}
        <View style={styles.ContainerTotalCount}>
          <View style={styles.TotalCount}>
            <Text style={styles.TextTotal}>Total</Text>
            <Text style={styles.TextTotalCount}>Rp.100000</Text>
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
          <TouchableOpacity
            style={styles.ContainerButton}
            onPress={() => navigation.navigate('RecurringBilling')}>
            <View style={styles.ButtonPay}>
              <Text style={styles.TextButton}>Pay</Text>
            </View>
          </TouchableOpacity>
        )}
        <BottomSheet isVisible={visible}>
          <View style={styles.containerOverlay}>
            <TouchableOpacity
              style={styles.ContainerClose}
              onPress={toggleOverlay}>
              <FastImage
                style={styles.ButtonCloseStyle}
                source={ButtonClose}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <View style={styles.HeaderBottmSheet}>
              <Text style={styles.headerOverlay}>Bill Details</Text>
            </View>
            <View style={styles.ContainerForm}>
              <View style={styles.FormDetail1}>
                <Text style={styles.TextDataDetail}>No Meter</Text>
                <Text style={styles.ResDetail}>141234567690</Text>
              </View>
              <View style={styles.FormDetail1}>
                <Text style={styles.TextDataDetail}>IDPEL</Text>
                <Text style={styles.ResDetail}>511234567890</Text>
              </View>
              <View style={styles.FormDetail1}>
                <Text style={styles.TextDataDetail}>Tarif/Daya</Text>
                <Text style={styles.ResDetail}>R1/2200 VA</Text>
              </View>
              <View style={styles.FormDetail2}>
                <Text style={styles.TextDataDetail}>Token</Text>
                <Text style={styles.ResDetail}>Rp 50.000,00</Text>
              </View>
              <View style={styles.FormDetail2}>
                <Text style={styles.TextDataDetail}>PPJ</Text>
                <Text style={styles.ResDetail}>Rp 3.704,00</Text>
              </View>
              <View style={styles.FormDetail2}>
                <Text style={styles.TextDataDetail}>Admin</Text>
                <Text style={styles.ResDetail}>Rp 1.500,00</Text>
              </View>
              <View style={styles.FormDetail2}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    color: '#000000',
                    fontSize: moderateScale(12),
                  }}>
                  Total
                </Text>
                <Text style={styles.ResDetail}>Rp 51.500,00</Text>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default PaymentCard;
