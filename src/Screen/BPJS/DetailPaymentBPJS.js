import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LogBox,
  ToastAndroid,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {moderateScale} from 'react-native-size-matters';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import bcrypt from 'react-native-bcrypt';
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Overlay} from 'react-native-elements';
import {
  ArrowBack,
  CheckBox1,
  CheckActive,
  InfoPayment,
  IconSubscribtion,
  IconBPJSActive,
  mandiri,
  BCA,
  BNI,
} from '../../Assets/Assets';
import Loading from '../../Component/Loading/Loading';
import {CreateBPJSAction} from './redux/action';

const DetailPaymentBPJS = props => {
  const [cheked, setCheked] = useState(false);
  const [period, setPeriod] = useState(false);
  const [Dates, setDates] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([{label: 'Every Month', value: 'Month'}]);
  const [valueDate, setValueDate] = useState('');
  const [tanggal, setTanggal] = useState([
    {label: '01', value: '01'},
    {label: '02', value: '02'},
    {label: '03', value: '03'},
    {label: '04', value: '04'},
    {label: '05', value: '05'},
    {label: '06', value: '06'},
    {label: '07', value: '07'},
  ]);
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [visibleDate, setVisibleDate] = useState(false);
  const [pinuser, setPinUser] = useState('');
  const [countFalse, setCountFalse] = useState(2);
  const [weekchoice, SetWeekChoice] = useState({
    year: '',
    month: '',
    date: '',
  });
  const dispatch = useDispatch();

  const DetailRes = useSelector(state => state.BPJSReducer?.dataCustomer.data);
  console.log(DetailRes, '<=== hasil resDetail PDAM');
  const dataMethodPayment = useSelector(
    state => state.BankReducer?.paymentMethod,
  );

  const dateChoice = () => date + ''.slice(4, 16);
  const resDatePicker = () => {
    let year = dateChoice().slice(11, 15);
    let dateChoicez = dateChoice().slice(8, 10);
    let months = dateChoice().slice(4, 7);
    let resMonth =
      months === 'Jan'
        ? '01'
        : months === 'Feb'
        ? '02'
        : months === 'Mar'
        ? '03'
        : months === 'Apr'
        ? '04'
        : months === 'May'
        ? '05'
        : months === 'Jun'
        ? '06'
        : months === 'Jul'
        ? '07'
        : months === 'Aug'
        ? '08'
        : months === 'Oct'
        ? '09'
        : months === 'Sep'
        ? '10'
        : months === 'Nov'
        ? '11'
        : months === 'Dec'
        ? '12'
        : null;
    return year + '-' + resMonth + '-' + dateChoicez;
  };
  console.log(resDatePicker(), 'ini res date picker');

  const MonthToNum = () => {
    let month = DetailRes?.period[0].slice(5, 6);
    console.log(month, '<==== ini MonthToNum');
    let resMonth = '0' + month;

    return resMonth;
  };

  const dateNow = DetailRes?.period[0].slice(0, 4);
  console.log(dateNow, 'inidate now');

  const SumMonth = MonthToNum();
  console.log(SumMonth, ' ini month new in');

  useEffect(() => {
    SetWeekChoice({
      ...weekchoice,
      year: dateNow,
      month: SumMonth,
      date: valueDate,
    });
  }, [valueDate]);

  useEffect(() => {
    setRecuring({
      ...recuring,
      period: 'Month',
    });
  }, [period]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // SetWeekChoice(`${dateNow}-${SumMonth}-${valueDate}`);

  // Data yg diKirim MASIH BUG PERIOD TAK TERBACA
  const [recuring, setRecuring] = useState({
    status: true,
    period: '',
    createDate: DetailRes?.period[0],
  });

  console.log(recuring.period, 'ini hasil recuring');
  console.log(recuring.status, 'ini status recuring');
  console.log(recuring.createDate, 'ini date recuring');

  const paymentMethod = {
    type: dataMethodPayment.type,
    bankDestinationId: dataMethodPayment.bank_destination_id,
  };

  // `${dateNow}-09-${valueDate}`
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleOverlayDate = () => {
    setVisibleDate(!visibleDate);
  };

  const submitData = () => {
    toggleOverlay();
    dispatch(
      CreateBPJSAction({
        vaNumber: DetailRes?.noVa,
        fullName: DetailRes?.fullName,
        branch: DetailRes?.branch,
        familyMember: DetailRes?.familyMember,
        period: DetailRes?.period,
        countMonth: DetailRes?.countMonth,
        bill: DetailRes?.bill,
        adminFee: DetailRes?.adminFee,
        total: DetailRes?.total,
        payment: paymentMethod,
        recurringBilling: recuring,
      }),
    );
  };

  const CompareToken = () => {
    let resCompare = bcrypt.compareSync(pinuser, DetailRes.pin);
    console.log(resCompare, '<=====ini compare token');
    console.log(countFalse, '<=====ini hasil count false');
    resCompare
      ? submitData()
      : countFalse === 0
      ? props.navigation.navigate(
          'Home',
          setCountFalse(1),
          ToastAndroid.show(
            'Kesempatan anda telah habis, Silahkan ulangi kembali',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
          ),
        )
      : setCountFalse(prevtState => prevtState - 1);
    ToastAndroid.show(
      `PIN Anda Salah !!! Sisa Kesempatan ${countFalse}`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };

  console.log(date, ' ini date picker');
  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  // cek info bank
  const BankInfo = b =>
    b === 'BCA' ? BCA : b === 'Mandiri' ? mandiri : b === 'BNI' ? BNI : null;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <View style={styles.ContainerHeaderPayment}>
              <View style={styles.HeaderPayment}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <FastImage
                    style={styles.ArrowBack}
                    source={ArrowBack}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.Judul}>BPJS</Text>
              </View>
            </View>
            <View style={styles.Containerisi}>
              <View style={styles.ContainerTextBillDetail1}>
                <Text style={styles.TextHeadBill}>Bill Details</Text>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>No VA</Text>
                  <Text style={styles.TextDataRes}>
                    {DetailRes?.customerNumber}
                  </Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Fullname</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.fullName}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Branch</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.branch}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Family Member</Text>
                  <Text style={styles.TextDataRes}>
                    {DetailRes?.familyMember}
                  </Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Payment Period</Text>
                  <Text style={styles.TextDataRes}>{DetailRes?.period}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    marginTop: moderateScale(12),
                    marginRight: moderateScale(24),
                  }}>
                  <Text
                    style={
                      styles.TextData
                    }>{`${DetailRes?.countMonth} Months`}</Text>
                </View>
              </View>
              <View style={styles.ContainerTextBillDetail2}>
                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Bill</Text>
                  <Text
                    style={styles.TextDataRes}>{`Rp ${DetailRes?.bill}`}</Text>
                </View>

                <View style={styles.ContainerTextData}>
                  <Text style={styles.TextData}>Admin</Text>
                  <Text
                    style={
                      styles.TextDataRes
                    }>{`Rp ${DetailRes?.adminFee}`}</Text>
                </View>
                <View style={styles.ContainerTextData}>
                  <Text
                    style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                    Total
                  </Text>
                  <Text
                    style={{fontFamily: 'Montserrat-Bold', color: '#000000'}}>
                    {`Rp ${DetailRes?.total}`}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.PaymentMethod}>
              <View style={styles.ContainerTextPaymentMethod}>
                <Text style={styles.TextPaymentMethod}>Payment Method</Text>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(
                        'PaymentMethod',
                        'DetailPaymentBPJS',
                      )
                    }>
                    <Text style={styles.TextChange}>change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Text style={styles.ResPaymentMethod}>
                  {dataMethodPayment.type}
                  {': '}
                </Text>
                <FastImage
                  style={styles.LogoBank}
                  source={BankInfo(dataMethodPayment.bank_name)}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={toggleOverlay}
                style={styles.ContainerButton}>
                <View>
                  <Text style={styles.TextButtonBuy}>
                    Pay : <Text>{DetailRes?.total}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <Overlay isVisible={visibleDate} onBackdropPress={toggleOverlayDate}>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode={('year', 'month', 'date')}
          androidVariant={'nativeAndroid'}
          textColor={'#4493AC'}
          minimumDate={new Date(dateNow, SumMonth, 1)}

          // DetailRes?.payment_period,
        />
      </Overlay>

      <Overlay
        style={stylesOverlay.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <View style={stylesOverlay.container}>
          <Text style={stylesOverlay.header}>
            Please Submit Your PIN to Continue
          </Text>
          <FastImage
            style={stylesOverlay.ImgPin}
            source={IconSubscribtion}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={stylesOverlay.inputTitle}>
            <SmoothPinCodeInput
              cellSize={54}
              codeLength={6}
              mask={
                <View
                  style={{
                    width: moderateScale(10),
                    height: moderateScale(10),
                    borderRadius: moderateScale(25),
                    backgroundColor: '#000000',
                  }}
                />
              }
              editable={true}
              maskDelay={1000}
              password={true}
              cellStyle={null}
              cellStyleFocused={null}
              value={pinuser}
              onTextChange={setPinUser}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={CompareToken}
              style={stylesOverlay.ContainerButton}>
              <View>
                <Text style={stylesOverlay.TextButtonBuy}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </SafeAreaView>
  );
};

export default DetailPaymentBPJS;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(1),
    backgroundColor: 'white',
  },
  ContainerHeaderPayment: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(8),
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
    marginTop: moderateScale(48),
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
  ContainerDate: {
    height: moderateScale(41),
    width: moderateScale(290),
    borderWidth: moderateScale(1),
    backgroundColor: 'white',
    borderColor: '#000000',
    borderRadius: moderateScale(6),
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
