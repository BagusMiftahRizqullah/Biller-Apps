import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {BottomSheet} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {ConfirmationPaymentAction} from '../PaymentMethod/redux/action';
import Loading from '../../Component/Loading/Loading';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  IconPDAMActive,
  IconCloseWhite,
  InfoPayment,
  ButtonDownload,
  IconBPJSActive,
} from '../../Assets/Assets';

const NewPDAMBillDetail = props => {
  const [pay, setPay] = useState(false);
  const [image, setImage] = useState('');
  const [timer, setTimer] = useState(59);
  const [second, setSecond] = useState(59);
  const [upload, setUpload] = useState(false);

  const resPayment = useSelector(
    state => state.BPJSReducer?.dataCreateBPJS.data,
  );
  console.log(resPayment, '<==== ini res payment');
  const dispatch = useDispatch();
  const toggleOverlayUpload = () => {
    setUpload(!upload);
  };

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        console.log(response);
        if (response.didCancel) {
          console.log('cancle');
        } else {
          setImage(response.assets[0].uri);
        }
      },
    );
  };

  const imageFromCamera = () => {
    ImagePicker.launchCamera(
      {
        cameraType: 'back',
      },
      response => {
        console.log(response);
        if (response.didCancel) {
          console.log('cancle');
        } else {
          setImage(response.assets[0].uri);
        }
      },
    );
  };

  useEffect(() => {
    if (!second && timer) {
      setSecond(60);
      setTimer(timer - 1);
    }
    if (pay === true) {
      return;
    }
    if (timer === 0 && second === 0) {
      ToastAndroid.show(
        'Waktu anda habis, Transaksi di batalkan',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      props.navigation.navigate('Home');
    }
    if (!second) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecond(second - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [second]);

  const dataMethodPayment = useSelector(
    state => state.BankReducer?.paymentMethod,
  );
  console.log(dataMethodPayment?.bank_destination_id, 'ini bank id payment');
  const submitReceipt = () => {
    setPay(true);
    dispatch(
      ConfirmationPaymentAction({
        billId: resPayment?.billId,
        transactionId: resPayment?.paymentDetail.transactionId,
        bankDestinationId: dataMethodPayment?.bank_destination_id,
        receipt: image,
      }),
    );
  };
  const ResCreatePayment = useSelector(
    state => state.BankReducer?.paymentCreate.data,
  );
  const isLoading = useSelector(state => state.GlobalReducer.Loading);
  const lengPeriod = resPayment?.billDetail.paymentPeriod.length;
  console.log(lengPeriod, ' ini leng period');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.ContainerHeaderPayment}>
              <View style={styles.HeaderPayment}>
                <Text style={styles.Judul}>PDAM</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Home')}>
                  <FastImage
                    style={styles.Logo}
                    source={IconCloseWhite}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {/* <View style={styles.ContainerListPayment}>
                  <View style={styles.ContainerLogo}>
                    <FastImage
                      style={styles.Logo}
                      source={IconPDAMActive}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                  <View style={styles.ContainerText}>
                    <Text style={styles.TextList}>ga ada</Text>
                  </View>
                </View> */}
              </View>
            </View>
            <View>
              {pay === true ? (
                <>
                  {/* Recipe */}
                  <View style={styles.ContainerRes}>
                    <View style={styles.HeaderRes}>
                      <Text style={styles.TitleRes}>Reciept</Text>
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
                    <View style={styles.ContainerRes1}>
                      <View style={styles.Form1}>
                        <Text>Name</Text>
                        <Text style={styles.textRes}>
                          {ResCreatePayment?.receipt?.full_name}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Branch</Text>
                        <Text style={styles.textRes}>
                          {ResCreatePayment?.receipt?.branch}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Total Month</Text>
                        <Text style={styles.textRes}>
                          {ResCreatePayment?.receipt?.total_month}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Period</Text>
                        <Text style={styles.textRes}>
                          {ResCreatePayment?.receipt?.payment_period}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.ContainerForm2}>
                      <View style={styles.Form2}>
                        <Text>Admin</Text>
                        <Text style={styles.textRes}>
                          {`Rp ${ResCreatePayment?.receipt?.admin_fee}`}
                        </Text>
                      </View>
                      <View style={styles.Form2}>
                        <Text>Bill</Text>
                        <Text style={styles.textRes}>
                          {`Rp ${ResCreatePayment?.receipt?.bill_fee}`}
                        </Text>
                      </View>
                      <View style={styles.Form2}>
                        <Text style={styles.textRes}>Total</Text>
                        <Text style={styles.textRes}>
                          {`Rp ${ResCreatePayment?.receipt?.total}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {/* yang ini */}
                  <View style={styles.Containerres}>
                    <View style={styles.Headerres}>
                      <Text
                        style={{
                          color: '#364F90',
                          fontSize: moderateScale(13),
                          fontFamily: 'Montserrat-Bold',
                        }}>
                        Billed every month at 12nd
                      </Text>
                    </View>
                    <View style={styles.isiBilled}>
                      <View style={styles.ContainerIconPayment}>
                        <FastImage
                          style={styles.IconPayment}
                          source={IconBPJSActive}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                      </View>
                      <View style={styles.ContainerListBill}>
                        <View>
                          <Text style={styles.TextIcon1}>BPJS</Text>
                          <Text style={styles.TextIcon2}>
                            {ResCreatePayment?.recurring.bill_id}
                          </Text>
                        </View>
                        <Text
                          style={
                            styles.TextIcon3
                          }>{`Rp ${ResCreatePayment?.receipt?.total}`}</Text>
                      </View>
                    </View>
                    <View style={styles.ContainerTotal}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Regular',
                          color: '#000000',
                          marginTop: moderateScale(9),
                          marginLeft: moderateScale(9),
                        }}>
                        Total
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-Bold',
                          color: '#000000',
                          marginTop: moderateScale(9),
                          marginRight: moderateScale(9),
                        }}>
                        {`Rp ${ResCreatePayment?.receipt?.total}`}
                      </Text>
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
                              color: '#263765',
                            }}>
                            14 June 2022
                          </Text>
                        </Text>
                        <Text style={styles.TextInfo1}>
                          Your bill will be avalible in 9 June 2021 Pay withing
                          7 day to avoid late payment fee
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              ) : (
                <>
                  {/* ini tyimer */}
                  <View style={styles.Containerisi}>
                    <View style={styles.Headerisi}>
                      <Text style={styles.TitleIsi}>
                        Please complete your payment in
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(13),
                          fontFamily: 'Montserrat-Bold',
                        }}>
                        {`${timer}min ${second}S`}
                      </Text>
                    </View>
                    <View style={styles.ContainerForm1}>
                      <View style={styles.Form1}>
                        <Text>Total</Text>
                        <Text style={styles.textRes}>
                          {resPayment?.billDetail.total}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Bank</Text>
                        <Text style={styles.textRes}>
                          {resPayment?.paymentDetail.bank}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Account Name</Text>
                        <Text style={styles.textRes}>
                          {resPayment?.paymentDetail.accountName}
                        </Text>
                      </View>
                      <View style={styles.Form1}>
                        <Text>Account No</Text>
                        <Text style={styles.textRes}>
                          {resPayment?.paymentDetail.accountNo}
                        </Text>
                      </View>

                      {/* gambar */}
                      {image ? (
                        <>
                          <FastImage
                            style={{
                              height: moderateScale(190),
                              width: moderateScale(190),
                              alignSelf: 'center',
                            }}
                            source={{uri: image}}
                            resizeMode={FastImage.resizeMode.contain}
                          />
                          <TouchableOpacity
                            style={{
                              marginTop: moderateScale(4),
                              marginBottom: moderateScale(24),
                              height: moderateScale(43),
                              width: moderateScale(290),
                              borderWidth: moderateScale(1),
                              backgroundColor: '#4493AC',
                              borderRadius: moderateScale(4),
                              alignSelf: 'center',
                            }}
                            onPress={submitReceipt}>
                            <Text
                              style={{
                                color: 'white',
                                paddingTop: moderateScale(12),
                                fontSize: moderateScale(12),
                                fontFamily: 'Montserrat-Bold',
                                alignSelf: 'center',
                              }}>
                              Confirm
                            </Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <TouchableOpacity
                          style={styles.ContainerAdd}
                          onPress={toggleOverlayUpload}>
                          <Text style={styles.TextAddCard}>Upload Receipt</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View style={styles.ContainerDetail}>
                    <View style={styles.ContainerTextBillDetail1}>
                      <Text style={styles.TextHeadBill}>Bill Details</Text>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>No VA</Text>
                        <Text style={styles.TextDataRes}>
                          {resPayment?.billDetail.noVa}
                        </Text>
                      </View>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Fullname</Text>
                        <Text style={styles.TextDataRes}>
                          {resPayment?.billDetail.fullName}
                        </Text>
                      </View>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Branch</Text>
                        <Text style={styles.TextDataRes}>
                          {resPayment?.billDetail.branch}
                        </Text>
                      </View>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Family Member</Text>
                        <Text style={styles.TextDataRes}>
                          {resPayment?.billDetail.familyMember}
                        </Text>
                      </View>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Payment period</Text>
                        <Text style={styles.TextDataRes}>
                          {resPayment?.billDetail.paymentPeriod}
                        </Text>
                      </View>
                      <View
                        style={{
                          alignSelf: 'flex-end',
                          marginTop: moderateScale(12),
                          marginRight: moderateScale(24),
                        }}>
                        <Text
                          style={
                            styles.TextData
                          }>{`${lengPeriod} Months`}</Text>
                      </View>
                    </View>
                    <View style={styles.ContainerTextBillDetail2}>
                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Bill</Text>
                        <Text
                          style={
                            styles.TextDataRes
                          }>{`Rp ${resPayment?.billDetail.billFee}`}</Text>
                      </View>

                      <View style={styles.ContainerTextData}>
                        <Text style={styles.TextData}>Admin</Text>
                        <Text
                          style={
                            styles.TextDataRes
                          }>{`Rp ${resPayment?.billDetail.adminFee}`}</Text>
                      </View>
                      <View style={styles.ContainerTextData}>
                        <Text
                          style={{
                            fontFamily: 'Montserrat-Bold',
                            color: '#000000',
                          }}>
                          Total
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Montserrat-Bold',
                            color: '#000000',
                          }}>
                          {`Rp ${resPayment?.billDetail.total}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    color: 'white',
                    alignSelf: 'center',
                    paddingBottom: moderateScale(24),
                    marginTop: pay ? moderateScale(24) : moderateScale(0),
                  }}>
                  Back to home
                </Text>
              </TouchableOpacity>
              <BottomSheet isVisible={upload}>
                <View style={styles.containerOverlay}>
                  <View style={styles.HeaderBottmSheet}>
                    <Text style={styles.headerOverlay}>Upload Receipt</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        marginTop: moderateScale(24),
                        marginBottom: moderateScale(13),
                        height: moderateScale(43),
                        width: moderateScale(290),
                        borderWidth: moderateScale(1),
                        backgroundColor: '#4493AC',
                        borderRadius: moderateScale(4),
                        alignSelf: 'center',
                      }}
                      onPress={() => imageFromCamera()}>
                      <Text
                        style={{
                          color: 'white',
                          paddingTop: moderateScale(12),
                          fontSize: moderateScale(12),
                          fontFamily: 'Montserrat-Bold',
                          alignSelf: 'center',
                        }}>
                        Take Photo
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        marginBottom: moderateScale(13),
                        height: moderateScale(43),
                        width: moderateScale(290),
                        borderWidth: moderateScale(1),
                        backgroundColor: '#4493AC',
                        borderRadius: moderateScale(4),
                        alignSelf: 'center',
                      }}
                      onPress={() => pickImage()}>
                      <Text
                        style={{
                          color: 'white',
                          paddingTop: moderateScale(12),
                          fontSize: moderateScale(12),
                          fontFamily: 'Montserrat-Bold',
                          alignSelf: 'center',
                        }}>
                        Choose From Library
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: moderateScale(43),
                        width: moderateScale(290),
                        borderWidth: moderateScale(1),
                        backgroundColor: '#EB5757',
                        borderRadius: moderateScale(4),
                        alignSelf: 'center',
                      }}
                      onPress={toggleOverlayUpload}>
                      <Text
                        style={{
                          color: 'white',
                          paddingTop: moderateScale(12),
                          fontSize: moderateScale(12),
                          fontFamily: 'Montserrat-Bold',
                          alignSelf: 'center',
                        }}>
                        Cancle
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </BottomSheet>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMBillDetail;

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
    marginLeft: moderateScale(29),
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
    marginTop: moderateScale(13),
    marginLeft: moderateScale(28),
    width: widthPercentageToDP(85),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  Headerisi: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  TitleIsi: {
    marginTop: moderateScale(32),
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },

  ContainerForm1: {
    marginTop: moderateScale(18),
  },
  Form1: {
    marginTop: moderateScale(8),
    marginRight: moderateScale(24),
    marginLeft: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerAdd: {
    marginTop: moderateScale(24),
    marginBottom: moderateScale(24),
    height: moderateScale(43),
    width: moderateScale(290),
    borderWidth: moderateScale(1),
    backgroundColor: 'white',
    borderColor: '#999999',
    borderRadius: moderateScale(1),
    alignSelf: 'center',
    borderStyle: 'dashed',
  },

  TextAddCard: {
    paddingTop: moderateScale(12),
    alignSelf: 'center',
  },

  ContainerDetail: {
    marginTop: moderateScale(28),
    marginLeft: moderateScale(28),
    marginBottom: moderateScale(32),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(52),
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
    marginTop: moderateScale(12),
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
  TextData2: {
    alignSelf: 'flex-end',
    marginTop: moderateScale(4),
    marginRight: moderateScale(24),
  },
  TextDataRes: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginLeft: moderateScale(80),
  },
  ContainerRes: {
    marginTop: moderateScale(4),
    alignSelf: 'center',
    height: heightPercentageToDP(41),
    width: widthPercentageToDP(90),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
  },
  HeaderRes: {
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
  TitleRes: {
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
  ContainerRes1: {
    marginTop: moderateScale(8),
  },
  Res: {
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
  containerOverlay: {
    marginTop: moderateScale(410),
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(36),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    padding: moderateScale(43),
    justifyContent: 'center',
  },
  headerOverlay: {
    color: '#000000',
    fontSize: moderateScale(24),
    fontFamily: 'Montserrat-Regular',
    marginLeft: moderateScale(60),
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
  Containerres: {
    marginTop: moderateScale(43),
    marginLeft: moderateScale(21),
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(40),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
  },
  Headerres: {
    marginTop: moderateScale(24),
    marginRight: moderateScale(24),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  isiBilled: {
    paddingTop: moderateScale(36),
    marginLeft: moderateScale(24),
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
    marginRight: moderateScale(18),
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
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    paddingRight: moderateScale(79),
  },
  TextIcon2: {
    color: '#828282',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    paddingRight: moderateScale(79),
  },
  // Uang
  TextIcon3: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regulr',
    marginRight: moderateScale(8),
  },
  ContainerTotal: {
    marginTop: moderateScale(18),
    marginBottom: moderateScale(1),
    marginLeft: moderateScale(23),
    width: widthPercentageToDP(73),
    height: heightPercentageToDP(5),
    borderTopStartRadius: moderateScale(4),
    borderTopEndRadius: moderateScale(4),
    borderBottomStartRadius: moderateScale(4),
    borderBottomEndRadius: moderateScale(4),
    backgroundColor: '#EBEDF4',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerInfoSubscription: {
    alignItems: 'center',
  },
  InfoSubscriptionStyle: {
    height: moderateScale(116),
    width: moderateScale(290),
  },
  TextInfoContainer: {
    position: 'absolute',
    marginTop: moderateScale(30),
    marginLeft: moderateScale(65),
  },
  TextInfo1: {
    color: '#263765',
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Regular',
  },
});
