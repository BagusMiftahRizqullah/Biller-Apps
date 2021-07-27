import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  IconInternetActive,
  IconCloseWhite,
  ButtonDownload,
} from '../../../Assets/Assets';

const ResultPaymentCreditInternetTv = props => {
  const resPayment = useSelector(state => state.inTvReducer?.resBill);
  console.log(resPayment, '<==== ini res payment');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeaderPayment}>
          <View style={styles.HeaderPayment}>
            <Text style={styles.Judul}>Internet & TV</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <FastImage
                style={styles.Logo}
                source={IconCloseWhite}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
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
                <Text style={styles.TextList}>
                  {resPayment?.bill_details.provider}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Containerisi}>
          <View style={styles.Headerisi}>
            <Text style={styles.TitleIsi}>Reciept</Text>
            <TouchableOpacity>
              <View style={styles.ContainerDownload}>
                <FastImage
                  style={styles.buttonDownload}
                  source={ButtonDownload}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.TextDownload}>Download</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sprit} />
          <View style={styles.ContainerForm1}>
            <View style={styles.Form1}>
              <Text>Phone Number</Text>
              <Text style={styles.textRes}>
                {resPayment?.payment_details.account_number}
              </Text>
            </View>
            <View style={styles.Form1}>
              <Text>Provider</Text>
              <Text style={styles.textRes}>
                {resPayment?.bill_details.provider}
              </Text>
            </View>
          </View>
          <View style={styles.ContainerForm2}>
            <View style={styles.Form2}>
              <Text>Bill</Text>
              <Text style={styles.textRes}>
                {resPayment?.bill_details.bill}
              </Text>
            </View>

            <View style={styles.Form2}>
              <Text>Admin</Text>
              <Text style={styles.textRes}>
                {resPayment?.bill_details.admin}
              </Text>
            </View>
            <View style={styles.Form2}>
              <Text style={styles.textRes}>Total</Text>
              <Text style={styles.textRes}>
                {resPayment?.bill_details.total}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPaymentCreditInternetTv;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
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
    justifyContent: 'space-between',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(34),
    marginRight: moderateScale(36),
  },

  Judul: {
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
    marginTop: moderateScale(28),
    alignSelf: 'center',
    height: heightPercentageToDP(40),
    width: widthPercentageToDP(90),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
  },
  Headerisi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerDownload: {
    marginTop: moderateScale(12),
    marginRight: moderateScale(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonDownload: {
    width: widthPercentageToDP(7),
    height: heightPercentageToDP(7),
  },
  TextDownload: {
    color: '#828282',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },
  TitleIsi: {
    marginTop: moderateScale(32),
    marginLeft: moderateScale(24),
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },
  sprit: {
    backgroundColor: '#E5E5E5',
    height: moderateScale(0),
    width: moderateScale(310),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    borderStyle: 'dashed',
  },
  ContainerForm1: {
    marginTop: moderateScale(8),
  },
  Form1: {
    marginTop: moderateScale(8),
    marginRight: moderateScale(24),
    marginLeft: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerForm2: {
    marginTop: moderateScale(12),
  },
  Form2: {
    marginTop: moderateScale(8),
    marginRight: moderateScale(24),
    marginLeft: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRes: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Bold',
  },
});
