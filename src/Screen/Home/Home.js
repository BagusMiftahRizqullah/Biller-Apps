import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  IconBiller,
  IconBell,
  IconBPJS,
  IconBPJSActive,
  IconElectricity,
  IconElectricityActive,
  IconInternet,
  IconInternetActive,
  IconLandLine,
  IconLandlineActive,
  IconMobile,
  IconMobileActive,
  IconPDAM,
  IconPDAMActive,
  IconSubscribtion,
  NoBill,
} from '../../Assets/Assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {IconFilter} from '../../Assets/Assets';
import PaymentCardHome from '../../Component/PaymentCardHome/PaymentCardHome';

const Home = props => {
  // const subscribtion = false;
  const [subscribtion, Setsubsribtion] = useState(true);
  const [tagihan, Settagihan] = useState(true);
  // subcribtion false tagihan false = Layar create
  // subcribtion true tagihan true = Layar tagihan
  // subcription true tagihan false = Layar No bill

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Headerr  */}
      <ScrollView
        contentContainerStyle={styles.Grow}
        style={styles.containerSub}>
        <View style={styles.containerFull}>
          <View style={styles.containerHead}>
            <FastImage
              style={styles.imageBiller}
              source={IconBiller}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.StyleText}>biller</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Notification')}>
              <FastImage
                style={styles.imageBell}
                source={IconBell}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerTop}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Electricity')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconElectricity}
                source={subscribtion ? IconElectricityActive : IconElectricity}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Mobile')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconMobile}
                source={subscribtion ? IconMobileActive : IconMobile}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('InternetTv')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconInternet}
                source={subscribtion ? IconInternetActive : IconInternet}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Internet & TV</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMiddle}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Landline')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconLandline}
                source={subscribtion ? IconLandlineActive : IconLandLine}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>Landline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('BPJS')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconBPJS}
                source={subscribtion ? IconBPJSActive : IconBPJS}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>BPJS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('NewPDAMOption')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <FastImage
                style={styles.imageIconPDAM}
                source={subscribtion ? IconPDAMActive : IconPDAM}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textInButton}>PDAM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container1} />
        {/* DATA ada */}
        {subscribtion && tagihan ? (
          <View>
            <Text style={styles.textSubsribtion}>Ongoing Purchase</Text>
            <PaymentCardHome late={false} success={false} ongoing={true} />
            <Text style={styles.textSubsribtion}>Active Subscriptions</Text>
            <PaymentCardHome late={true} />
            <PaymentCardHome late={false} success={false} />
          </View>
        ) : subscribtion && tagihan === false ? (
          <View>
            <Text style={styles.textSubsribtion}>Active subscribtion</Text>
            <View style={styles.ContainerImgSub}>
              <View style={styles.ImgSub}>
                <FastImage
                  style={styles.Subscription}
                  source={NoBill}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <Text style={styles.TextSubs}>No upcoming bill right now!</Text>
              {/* <TouchableOpacity style={styles.ContainerButtonSubs}>
              <View style={styles.ButtonSubs}>
                <Text style={styles.TextButtonSubs}>Create New</Text>
              </View>
            </TouchableOpacity> */}
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.textSubsribtion}>Active subscribtion</Text>
            <View style={styles.ContainerImgSub}>
              <View style={styles.ImgSub}>
                <FastImage
                  style={styles.Subscription}
                  source={IconSubscribtion}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <Text style={styles.TextSubs}>
                You don't have any subscribtion
              </Text>
              <TouchableOpacity style={styles.ContainerButtonSubs}>
                <View style={styles.ButtonSubs}>
                  <Text style={styles.TextButtonSubs}>Create New</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* <PaymentCardHome late={true} />
        <PaymentCardHome late={false} success={false} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
    paddingBottom: moderateScale(100),
  },
  containerSub: {
    // paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
  containerFull: {
    backgroundColor: '#263765',
  },
  containerHead: {
    flexDirection: 'row',
    padding: wp(5),
  },
  imageBiller: {
    height: hp(5),
    width: wp(5),
  },
  imageBell: {
    height: hp(5),
    width: wp(5),
    marginLeft: moderateScale(250),
  },
  StyleText: {
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
    alignSelf: 'center',
  },
  containerTop: {
    flexDirection: 'row',
  },
  imageIconElectricity: {
    height: moderateScale(44),
    width: moderateScale(32),
    top: moderateScale(12),
  },
  imageIconMobile: {
    height: moderateScale(44),
    width: moderateScale(31),
    top: moderateScale(12),
  },
  imageIconInternet: {
    height: moderateScale(44),
    width: moderateScale(40),
    top: moderateScale(12),
  },
  containerMiddle: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  imageIconLandline: {
    height: moderateScale(44),
    width: moderateScale(40),
    top: moderateScale(12),
  },
  imageIconBPJS: {
    height: moderateScale(44),
    width: moderateScale(44),
    top: moderateScale(12),
  },
  imageIconPDAM: {
    height: moderateScale(44),
    width: moderateScale(37),
    top: moderateScale(12),
  },
  buttonStyle: {
    alignItems: 'center',
    elevation: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    height: moderateScale(90),
    width: moderateScale(93),
    borderRadius: 20,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(9),
    top: hp(3),
  },
  textInButton: {
    top: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  container1: {
    backgroundColor: '#263765',
    height: moderateScale(78),
    width: moderateScale(210),
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
    borderRadius: 2,
    transform: [{scaleX: 2}],
    marginLeft: moderateScale(84),
  },
  textSubsribtion: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    marginTop: moderateScale(30),
    marginLeft: wp(5),
  },
  ContainerImgSub: {
    marginTop: hp(10),
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
    elevation: 10,
    width: wp(90),
    height: hp(39),
    alignSelf: 'center',
  },
  ImgSub: {
    alignItems: 'center',
  },
  Subscription: {
    height: moderateScale(107),
    width: moderateScale(154),
    justifyContent: 'center',
    top: moderateScale(45),
    // color: COLOR.purple.purpleBold,
    fontSize: moderateScale(13),
  },
  TextSubs: {
    // color: COLOR.purple.purpleBold,
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    top: moderateScale(65),
    paddingBottom: moderateScale(18),
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    top: moderateScale(75),
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: hp(6),
    width: wp(80),
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
