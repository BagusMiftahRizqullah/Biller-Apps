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
import {ArrowBack} from '../../../Assets/Assets';
import {Line, IconMobileActive} from '../../../Assets/Assets';

const MobileTransaction = props => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containerAll}>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
          <Text style={styles.fontText}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.containerBox2}>
          <View style={styles.containerUang}>
            <TouchableOpacity style={styles.boxKiri}>
              <Text style={styles.textDalamBox}>20.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxKanan}>
              <Text style={styles.textDalamBox}>50.000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerUang1}>
            <TouchableOpacity style={styles.boxKiri}>
              <Text style={styles.textDalamBox}>100.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxKanan}>
              <Text style={styles.textDalamBox}>200.000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerUang2}>
            <TouchableOpacity style={styles.boxKiri}>
              <Text style={styles.textDalamBox}>500.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxKanan}>
              <Text style={styles.textDalamBox}>1.000.000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerUang3}>
            <TouchableOpacity style={styles.boxKiri}>
              <Text style={styles.textDalamBox}>5.000.000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxKanan}>
              <Text style={styles.textDalamBox}>10.000.000</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(100), height: hp(30)}}>
            <TouchableOpacity
              style={styles.ContainerButtonSubs}
              onPress={() => props.navigation.navigate('NSBillDetail')}>
              <View style={styles.ButtonSubs}>
                <Text style={styles.TextButtonSubs}>Create</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MobileTransaction;

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
    borderRadius: moderateScale(8),
    backgroundColor: '#EBEDF4',
    width: moderateScale(335),
    height: moderateScale(117),
    alignSelf: 'center',
    marginBottom: moderateScale(40),
    top: moderateScale(30),
  },
  fontText: {
    fontSize: moderateScale(12),
    left: moderateScale(25),
    top: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  textInput: {
    width: moderateScale(290),
    height: moderateScale(44),
    borderRadius: moderateScale(4),
    backgroundColor: 'white',
    top: moderateScale(32),
    alignSelf: 'center',
  },
  containerBox2: {
    display: 'flex',
    backgroundColor: '#BDBDBD',
    width: wp(100),
    height: moderateScale(479),
    marginBottom: moderateScale(40),
    top: moderateScale(30),
  },
  containerUang: {
    flexDirection: 'row',
  },
  boxKiri: {
    width: moderateScale(152),
    height: moderateScale(72),
    backgroundColor: 'white',
    borderRadius: moderateScale(6),
    top: moderateScale(34),
    left: moderateScale(21),
    right: moderateScale(3),
  },
  boxKanan: {
    width: moderateScale(152),
    height: moderateScale(72),
    backgroundColor: 'white',
    borderRadius: moderateScale(6),
    top: moderateScale(34),
    left: moderateScale(45),
  },
  textDalamBox: {
    top: moderateScale(23),
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
  },
  containerUang1: {
    flexDirection: 'row',
    top: moderateScale(16),
  },
  containerUang2: {
    flexDirection: 'row',
    top: moderateScale(32),
  },
  containerUang3: {
    flexDirection: 'row',
    top: moderateScale(48),
  },
  addnewbill: {
    width: moderateScale(290),
    height: moderateScale(51),
    borderRadius: moderateScale(5),
    borderWidth: moderateScale(1),
    borderStyle: 'dashed',
    alignSelf: 'center',
    top: moderateScale(38),
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
