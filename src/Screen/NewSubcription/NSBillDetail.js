import React from 'react';
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
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ArrowBack} from '../../Assets/Assets';
import {Line, IconMobileActive} from '../../Assets/Assets';

const NSBillDetail = props => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Mobile</Text>
          </View>
          <View>
            <View style={styles.containerIconTop}>
              <FastImage
                style={styles.iconMobile}
                source={IconMobileActive}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={styles.textPulsa}>Pulsa-Telkomsel</Text>
          </View>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.topTitle}>Bill Detail</Text>
          <Text style={styles.dashline}>
            {' '}
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - -
          </Text>
          <View style={styles.containerDetail}>
            <Text style={styles.data1}>Phone Number</Text>
            <Text style={styles.data2}>082123456789</Text>
          </View>
          <View style={styles.containerDetail2}>
            <Text style={styles.data1}>Provider</Text>
            <Text style={styles.data2}>Telkomsel</Text>
          </View>
          <View style={styles.containerDetail3}>
            <Text style={styles.data1}>Voucher</Text>
            <Text style={styles.data2}>Rp 50.000,00</Text>
          </View>
          <View style={styles.containerDetail4}>
            <Text style={styles.data1}>Admin</Text>
            <Text style={styles.data2}>Rp 1.500,00</Text>
          </View>
          <View style={styles.containerDetail5}>
            <Text style={styles.data2}>Total</Text>
            <Text style={styles.data2}>Rp 51.500,00</Text>
          </View>
        </View>

        <View style={{width: wp(100), height: hp(30)}}>
          <TouchableOpacity
            style={styles.ContainerButtonSubs}
            onPress={() => props.navigation.navigate('NewSubscription')}>
            <View style={styles.ButtonSubs}>
              <Text style={styles.TextButtonSubs}>Add Bill</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NSBillDetail;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: moderateScale(150),
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(134),
    borderBottomLeftRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
  },
  HeaderBilling: {
    alignItems: 'center',
    flexDirection: 'row',
    top: moderateScale(35),
    left: moderateScale(30),
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
  containerIconTop: {
    height: moderateScale(27),
    width: moderateScale(27),
    backgroundColor: 'white',
    borderRadius: moderateScale(3),
    top: moderateScale(60),
    left: moderateScale(28),
  },
  iconMobile: {
    width: moderateScale(12),
    height: moderateScale(17),
    top: moderateScale(5),
    left: moderateScale(7),
  },
  textPulsa: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
    color: 'white',
    top: moderateScale(38),
    left: moderateScale(65),
  },
  containerBox: {
    display: 'flex',
    borderRadius: moderateScale(16),
    backgroundColor: 'white',
    width: moderateScale(332),
    height: moderateScale(277),
    alignSelf: 'center',
    marginBottom: moderateScale(40),
    top: moderateScale(30),
    elevation: moderateScale(10),
  },
  topTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
    color: '#000000',
    top: moderateScale(24),
    left: moderateScale(17),
  },
  dashline: {
    top: moderateScale(30),
    alignSelf: 'center',
  },
  containerDetail: {
    flexDirection: 'row',
    top: moderateScale(45),
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
  },
  containerDetail2: {
    flexDirection: 'row',
    top: moderateScale(55),
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
  },
  containerDetail3: {
    flexDirection: 'row',
    top: moderateScale(75),
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
  },
  containerDetail4: {
    flexDirection: 'row',
    top: moderateScale(85),
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
  },
  containerDetail5: {
    flexDirection: 'row',
    top: moderateScale(95),
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
  },
  data1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    color: '#000000',
  },
  data2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    color: '#000000',
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(90),
    elevation: moderateScale(3),
    top: moderateScale(120),
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
    paddingTop: moderateScale(5),
  },
});
