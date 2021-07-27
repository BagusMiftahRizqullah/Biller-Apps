import React, {useState, useEffect} from 'react';
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
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {ArrowBack} from '../../Assets/Assets';
import Loading from '../../Component/Loading/Loading';
import {
  NSElectricityTokenCreatePaymentAction,
  NSElectricityTagihanCreatePaymentAction,
  NSSavePaymentMethodAction,
} from '../../Screen/NewSubcription/redux/action';

const NSDetailPayElec = ({
  header,
  navigation,
  titleicon,
  icon,
  token = false,
  tagihan = false,
  page,
}) => {
  const dispatch = useDispatch();

  const DetailRes = useSelector(
    state => state.newSubReducer?.dataUserElectricity.data,
  );

  console.log(DetailRes, '<=== hasil user detail electricity');
  const billData = {
    No_Meter: DetailRes?.No_Meter,
    IDPEL: DetailRes?.IDPEL,
    Name: DetailRes?.Name,
    Tarif_Daya: DetailRes?.Tarif_Daya,
    Token: DetailRes?.Token,
    PPJ: DetailRes?.PPJ,
    Admin: DetailRes?.Admin,
    Total: DetailRes?.Total,
  };
  // Data yg diKirim MASIH BUG PERIOD TAK TERBACA
  console.log(titleicon, 'ini title');
  const submitData = () => {
    if (titleicon === 'PLN - Tagihan') {
      dispatch(
        NSSavePaymentMethodAction({
          data: billData,
        }),
      );
    }
    if (titleicon === 'PLN - Token') {
      dispatch(
        NSSavePaymentMethodAction({
          data: billData,
        }),
      );
    }
  };

  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.ContainerHeaderPayment}>
              <View style={styles.HeaderPayment}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FastImage
                    style={styles.ArrowBack}
                    source={ArrowBack}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.Judul}>{header}</Text>
              </View>
              <View>
                <View style={styles.ContainerDetailListPayment}>
                  <View style={styles.ContainerLogo}>
                    <FastImage
                      style={styles.Logo}
                      source={icon}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                  <View style={styles.ContainerText}>
                    <Text style={styles.TextList}>{titleicon}</Text>
                  </View>
                </View>
              </View>
            </View>
            {token ? (
              <View style={styles.Containerisi}>
                <View style={styles.ContainerTextBillDetail1}>
                  <Text style={styles.TextHeadBill}>Bill Details</Text>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>No Meter</Text>
                    <Text style={styles.TextDataRes}>{DetailRes.No_Meter}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>IDPEL</Text>
                    <Text style={styles.TextDataRes}>{DetailRes.IDPEL}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Name</Text>
                    <Text style={styles.TextDataRes}>{DetailRes.Name}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Tarif/Daya</Text>
                    <Text style={styles.TextDataRes}>
                      {DetailRes.Tarif_Daya}
                    </Text>
                  </View>
                </View>
                <View style={styles.ContainerTextBillDetail2}>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Token</Text>
                    <Text style={styles.TextDataRes}>Rp {DetailRes.Token}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>PPJ</Text>
                    <Text style={styles.TextDataRes}>Rp {DetailRes.PPJ}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Admin</Text>
                    <Text style={styles.TextDataRes}>Rp {DetailRes.Admin}</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text
                      style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                      Total
                    </Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                      Rp {DetailRes.Total}
                    </Text>
                  </View>
                </View>
              </View>
            ) : tagihan ? (
              <View style={styles.Containerisi}>
                <View style={styles.ContainerTextBillDetail1}>
                  <Text style={styles.TextHeadBill}>Bill Details</Text>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>IDPEL</Text>
                    <Text style={styles.TextDataRes}>511234567890</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Name</Text>
                    <Text style={styles.TextDataRes}>Justin Junaedi</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Tarif/Daya</Text>
                    <Text style={styles.TextDataRes}>R1/2200 VA</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Bulan/Tahun</Text>
                    <Text style={styles.TextDataRes}>May 2021</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Stand Meter</Text>
                    <Text style={styles.TextDataRes}>00001804-00002054</Text>
                  </View>
                </View>
                <View style={styles.ContainerTextBillDetail2}>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Bill</Text>
                    <Text style={styles.TextDataRes}>Rp 89.704,00</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text style={styles.TextData}>Admin</Text>
                    <Text style={styles.TextDataRes}>Rp 1.500,00</Text>
                  </View>
                  <View style={styles.ContainerTextData}>
                    <Text
                      style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                      Total
                    </Text>
                    <Text
                      style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                      Rp 51.500,00
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}
            <View>
              <TouchableOpacity
                onPress={() => {
                  submitData(), navigation.navigate('NewSubscription');
                }}
                style={styles.ContainerButton}>
                <View>
                  <Text style={styles.TextButtonBuy}>Pay Bill</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NSDetailPayElec;

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
  ContainerDetailListPayment: {
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
    marginTop: moderateScale(53),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(48),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  ContainerTextBillDetail1: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: moderateScale(18),
    marginLeft: moderateScale(18),
  },
  ContainerTextBillDetail2: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: moderateScale(24),
    marginLeft: moderateScale(18),
  },
  TextHeadBill: {
    marginBottom: moderateScale(24),
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  ContainerTextData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: moderateScale(12),
    marginRight: moderateScale(24),
  },
  TextData: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  TextDataRes: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  PaymentMethod: {
    marginTop: moderateScale(30),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(14),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  ContainerTextPaymentMethod: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: moderateScale(18),
    marginLeft: moderateScale(18),
  },
  TextPaymentMethod: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  TextChange: {
    marginRight: moderateScale(24),
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    textDecorationLine: 'underline',
  },
  ResPaymentMethod: {
    marginLeft: moderateScale(18),
    marginRight: moderateScale(148),
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
    alignSelf: 'center',
  },
  RecurringBilling: {
    marginTop: moderateScale(30),
    marginLeft: moderateScale(28),
    marginBottom: moderateScale(64),
    width: widthPercentageToDP(85),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  CheckBox: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
    marginRight: moderateScale(18),
  },
  ContainerRecurringBilling: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    marginLeft: moderateScale(18),
  },
  HeaderRecurring: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(1),
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
  },
  TextIsiRecurring: {
    marginTop: moderateScale(1),
    marginLeft: moderateScale(55),
    color: '#828282',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(10),
  },
  ContainerDropButton: {
    flexDirection: 'column',
    marginTop: moderateScale(8),
    marginLeft: moderateScale(18),
    marginRight: moderateScale(18),
  },
  HeaderDropdown: {
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(12),
    marginBottom: moderateScale(12),
    marginTop: moderateScale(18),
  },
  dropDownContainerStyle: {
    backgroundColor: 'white',
    marginBottom: moderateScale(1),
    zIndex: 1000,
  },
  ContainerButton: {
    backgroundColor: '#4493AC',
    alignItems: 'center',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(87),
    marginLeft: moderateScale(24),
    marginTop: moderateScale(26),
  },
  TextButtonBuy: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
  ContainerInfoPayment: {
    alignItems: 'center',
  },
  InfoPaymentStyle: {
    height: moderateScale(111),
    width: moderateScale(285),
  },
  TextInfoContainer: {
    paddingLeft: moderateScale(12),
    position: 'absolute',
    margin: moderateScale(26),
  },
  TextInfo1: {
    fontSize: moderateScale(11),
    color: '#263765',
    fontFamily: 'Montserrat-Regular',
  },
  LogoBank: {
    alignSelf: 'center',
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(10),
  },
});

const stylesOverlay = StyleSheet.create({
  container: {
    width: widthPercentageToDP(90),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingStart: moderateScale(20),
    paddingEnd: moderateScale(20),
    margin: -16,
  },
  header: {
    marginTop: moderateScale(14),
    marginBottom: moderateScale(24),
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
  },

  inputTitle: {
    alignSelf: 'stretch',
    marginTop: moderateScale(16),
    backgroundColor: '#EBEDF4',
    borderRadius: moderateScale(19),
    fontFamily: 'Roboto-Bold',
  },
  ContainerButton: {
    backgroundColor: '#4493AC',
    alignItems: 'center',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(79),
    marginTop: moderateScale(60),
    marginBottom: moderateScale(8),
  },
  TextButtonBuy: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
  ImgPin: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
});
