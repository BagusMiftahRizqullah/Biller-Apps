import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  LogBox,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {PeriodBPJSAction, CostumerBPJSAction} from './redux/action';
import {ArrowBack} from '../../Assets/Assets';
import Loading from '../../Component/Loading/Loading';

const BPJS = props => {
  const [nometer, setNometer] = useState('');
  const [period, setPeriod] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PeriodBPJSAction());
  }, [dispatch]);

  console.log(value, 'ini items');

  const DetailRes = useSelector(state => state.BPJSReducer?.dataPeriod?.data);
  console.log(DetailRes, '<==== hasil resDetail BPJS');

  const funPeriodvalues = DetailRes?.map((v, i) => {
    return {label: v?.period, value: v?.month};
  });

  useEffect(() => {
    setItems(funPeriodvalues);
  }, [DetailRes]);

  const submitDataCostomer = () => {
    dispatch(
      CostumerBPJSAction({
        customerNumber: nometer,
        month: value + '',
      }),
    );
  };

  const DataCostomer = useSelector(state => state.GlobalReducer.Success);
  console.log(DataCostomer, 'status datacostumer');

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const isLoading = useSelector(state => state.GlobalReducer.Loading);

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
      height: heightPercentageToDP(10),
      borderBottomLeftRadius: moderateScale(16),
      borderBottomRightRadius: moderateScale(16),
    },
    HeaderPayment: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: moderateScale(24),
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

    TextList: {
      color: '#ffffff',
      fontSize: moderateScale(13),
      fontFamily: 'Montserrat-Regular',
    },
    Containerisi: {
      marginTop: moderateScale(40),
      marginLeft: moderateScale(20),
      marginRight: moderateScale(20),
      height: heightPercentageToDP(50),
      zIndex: -10,
    },
    Containerisi2: {
      backgroundColor: '#EBEDF4',
      height: period ? heightPercentageToDP(52) : heightPercentageToDP(30),
      borderTopStartRadius: moderateScale(8),
      borderTopEndRadius: moderateScale(8),
      borderBottomStartRadius: moderateScale(8),
      borderBottomEndRadius: moderateScale(8),
    },
    ContainerTextInput: {
      marginLeft: moderateScale(24),
      marginTop: moderateScale(20),
    },
    TextHeadNometer: {
      color: '#263765',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Bold',
    },
    inputNoMeter: {
      borderRadius: moderateScale(4),
      height: moderateScale(44),
      width: moderateScale(290),
      marginTop: moderateScale(4),
      backgroundColor: DataCostomer ? 'white' : '#FFF4F7',
    },
    TextNotRegister: {
      paddingTop: moderateScale(4),
      alignSelf: 'center',
      color: DataCostomer ? '#EBEDF4' : '#EB5757',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Regular',
    },

    dropDownContainerStyle: {
      backgroundColor: 'white',
      marginTop: moderateScale(8),
      width: widthPercentageToDP(75),
      borderColor: 'white',
    },

    ContainerButtonConfirm: {
      marginLeft: moderateScale(27),
      marginTop: moderateScale(120),
    },
    ButtonConfirm: {
      backgroundColor: '#4493AC',
      borderTopStartRadius: moderateScale(5),
      borderTopEndRadius: moderateScale(5),
      borderBottomStartRadius: moderateScale(5),
      borderBottomEndRadius: moderateScale(5),
      height: heightPercentageToDP(6),
      width: widthPercentageToDP(87),
      alignItems: 'center',
    },
    TextButtonConfirm: {
      color: 'white',
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Bold',
      paddingTop: moderateScale(11),
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
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
              <View style={styles.Containerisi2}>
                <View style={styles.ContainerTextInput}>
                  <Text style={styles.TextHeadNometer}>No VA</Text>
                  <TextInput
                    style={styles.inputNoMeter}
                    onChangeText={setNometer}
                    value={nometer}
                    placeholder=" E.g 141234567890"
                    keyboardType="numeric"
                  />
                </View>
                <Text style={styles.TextNotRegister}>
                  Number Not Registered
                </Text>
                <View style={styles.ContainerTextInput}>
                  <Text style={styles.TextHeadNometer}>Payment Period</Text>
                  <DropDownPicker
                    placeholder="Please Select..."
                    placeholderStyle={{color: '#BDBDBD'}}
                    style={styles.dropDownContainerStyle}
                    dropDownDirection="BOTTOM"
                    dropDownContainerStyle={{
                      width: widthPercentageToDP(75),
                    }}
                    open={period}
                    value={value}
                    items={items}
                    setOpen={setPeriod}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
              </View>
            </View>
            {/* landline */}

            <View style={styles.ContainerHarga}>
              <TouchableOpacity
                onPress={submitDataCostomer}
                style={styles.ContainerButtonConfirm}>
                <View style={styles.ButtonConfirm}>
                  <Text style={styles.TextButtonConfirm}>Confirm</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BPJS;
