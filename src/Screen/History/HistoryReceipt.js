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

const HistoryReceipt = props => {
  return (
    <SafeAreaView
      style={{backgroundColor: '#263765', width: wp(100), height: hp(100)}}>
      <ScrollView
        style={{
          flexGrow: 1,
        }}>
        <View style={styles.topContainer}>
          <Text style={styles.text1}>Electricity</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('History')}>
            <FastImage
              style={styles.closeIcon}
              source={IconCloseWhite}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            left: moderateScale(28),
            paddingBottom: moderateScale(20),
            flexDirection: 'row',
          }}>
          <View style={styles.borderPLN}>
            <FastImage
              style={styles.PLNIcon}
              source={PLN}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={styles.text2}>PLN - Token</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.containerTextReceipt}>
              <Text style={styles.textReceipt}>Receipt</Text>
            </View>
            <View style={styles.containerGaris}>
              <Text>
                {' '}
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - - - - - -{' '}
              </Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>No Meter</Text>
              <Text style={styles.textBold}>141234567890</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>IDPEL</Text>
              <Text style={styles.textBold}>511234567890</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>Name</Text>
              <Text style={styles.textBold}>Justin Junaedi</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>Tarif/Daya</Text>
              <Text style={styles.textBold}>R1/2200 VA</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>Ref</Text>
              <View style={styles.textRef}>
                <Text style={styles.textBold}>0213170Z1E5B19370EA</Text>
                <Text style={styles.textBold}>E44JKUID76384</Text>
              </View>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>kWh</Text>
              <Text style={styles.textBold}>32,1</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>Rp Stroom/Token</Text>
              <Text style={styles.textBold}>Rp. 46.296,00</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>PPJ</Text>
              <Text style={styles.textBold}>Rp. 3.704,00</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBiasa}>Admin</Text>
              <Text style={styles.textBold}>Rp. 1500,00</Text>
            </View>
            <View style={styles.textLine1}>
              <Text style={styles.textBold}>Total</Text>
              <Text style={styles.textBold}>Rp. 51.500,00</Text>
            </View>
            <View style={styles.textLine2}>
              <Text style={styles.textBiasa}>Stroom / Token</Text>
            </View>
            <View style={styles.stroomToken}>
              <Text style={styles.textToken}>4060 7604 1644 1230 5567</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryReceipt;

const styles = StyleSheet.create({
  closeIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
    top: moderateScale(23),
  },
  PLNIcon: {
    width: moderateScale(16),
    height: moderateScale(10),
    alignSelf: 'center',
    top: moderateScale(8),
  },
  borderPLN: {
    backgroundColor: 'white',
    width: moderateScale(27),
    height: moderateScale(27),
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
  text2: {
    color: 'white',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    alignSelf: 'center',
    left: moderateScale(10),
  },
  mainContainer: {
    width: wp(100),
    height: hp(80),
  },
  boxContainer: {
    width: moderateScale(332),
    height: moderateScale(509),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: moderateScale(16),
    top: moderateScale(20),
  },
  containerTextReceipt: {
    top: moderateScale(24),
    left: moderateScale(17),
  },
  textReceipt: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
  containerGaris: {
    alignSelf: 'center',
    top: moderateScale(40),
  },
  textLine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
    top: moderateScale(42),
    paddingTop: moderateScale(10),
  },
  textLine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(300),
    alignSelf: 'center',
    top: moderateScale(60),
    paddingTop: moderateScale(10),
  },
  textBiasa: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  textBold: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  stroomToken: {
    width: moderateScale(300),
    height: moderateScale(41),
    backgroundColor: '#EBEDF4',
    alignSelf: 'center',
    borderRadius: moderateScale(6),
    top: moderateScale(80),
  },
  textToken: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    top: moderateScale(12),
  },
});
