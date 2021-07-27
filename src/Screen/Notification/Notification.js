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
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../Component/Loading/Loading';
import {
  ArrowBack,
  Subtract,
  NotifikasiSucces,
  NotifikasiFailed,
} from '../../Assets/Assets';
import {NotifAction} from './redux/action';

const Notification = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NotifAction());
  }, [dispatch]);

  const DataNotif = useSelector(state => state.NotifReducer?.dataNotif?.data);

  console.log(DataNotif, 'ini hasil data Notif User');

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let Bulan =
      month === 1
        ? 'Jan'
        : month === 2
        ? 'Feb'
        : month === 3
        ? 'Mar'
        : month === 4
        ? 'Apr'
        : month === 5
        ? 'May'
        : month === 6
        ? 'Jun'
        : month === 7
        ? 'Jul'
        : month === 8
        ? 'Aug'
        : month === 9
        ? 'Oct'
        : month === 10
        ? 'Sep'
        : month === 11
        ? 'Nov'
        : month === 12
        ? 'Dec'
        : null;

    return date + '  ' + Bulan + '  ' + year; //format: dd-mm-yyyy;
  };

  console.log(getCurrentDate(), 'ini date now');

  const numHide = card => {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 6) {
        hideNum.push('*');
      } else {
        hideNum.push(card[i]);
      }
    }
    return hideNum.join('');
  };
  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  return (
    <SafeAreaView
      style={{width: wp(100), height: hp(100), backgroundColor: 'white'}}>
      <ScrollView style={styles.containerAll}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <View style={styles.backgroundTanggal}>
              <Text style={styles.textTanggal}>{getCurrentDate()}</Text>
            </View>
            <View style={styles.containerHead}>
              <View style={styles.HeaderBilling}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <FastImage
                    style={styles.ArrowBack}
                    source={ArrowBack}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.Judul}>Notification</Text>
              </View>
            </View>
            <View>
              {DataNotif?.success?.map((v, i) => {
                return (
                  <View key={i}>
                    <View style={styles.notifikasiAll}>
                      <FastImage
                        style={styles.notifikasiSucces}
                        source={NotifikasiSucces}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                      <View style={styles.paymentSuccess}>
                        <Text style={styles.textAtas}>
                          {`${v.bill_type} - Payment Success`}
                        </Text>
                        <Text style={styles.textBawah}>
                          {`Transaction of Rp.${v.total} for ${numHide(
                            v.customer_number,
                          )} (${v.name}) has been successfully paid.`}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.garis} />
                  </View>
                );
              })}
            </View>
            <View>
              {DataNotif?.failed?.map((v, i) => {
                return (
                  <View key={i}>
                    <View style={styles.notifikasiAll}>
                      <FastImage
                        style={styles.notifikasiFailed}
                        source={NotifikasiFailed}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                      <View style={styles.paymentFailed}>
                        <Text style={styles.textAtas}>
                          {`${v.bill_type} - Payment Failed`}
                        </Text>
                        <Text style={styles.textBawah}>
                          {`We couldn't procees your transaction Rp.${
                            v.total
                          } for ${numHide(v.customer_number)} (${
                            v.name
                          })  Please try again.`}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.garis} />
                  </View>
                );
              })}
            </View>
            <View>
              {DataNotif?.reminder?.map((v, i) => {
                return (
                  <View key={i}>
                    <View style={styles.notifikasiAll}>
                      <FastImage
                        style={styles.notifikasiOngoing}
                        source={Subtract}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                      <View style={styles.paymentOngoing}>
                        <Text style={styles.textAtas}>
                          Your subscription due in 2 days
                        </Text>
                        <Text style={styles.textBawah}>
                          {`Montly subscribtion  Rp.${v.total} due in 28 June 2021. Please pay before due date to avoid late fee..`}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.garis} />
                  </View>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingBottom: moderateScale(150),
  },
  containerHead: {
    backgroundColor: '#263765',
    height: moderateScale(95),
    borderBottomLeftRadius: moderateScale(18),
    borderBottomRightRadius: moderateScale(18),
    bottom: moderateScale(50),
  },
  HeaderBilling: {
    alignItems: 'center',
    flexDirection: 'row',
    top: moderateScale(38),
    left: moderateScale(33),
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
  backgroundTanggal: {
    backgroundColor: '#7284B1',
    height: moderateScale(50),
    top: moderateScale(70),
  },
  textTanggal: {
    top: moderateScale(28),
    left: moderateScale(12),
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    color: 'white',
  },
  notifikasiAll: {
    flexDirection: 'row',
  },
  notifikasiSucces: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  notifikasiFailed: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  notifikasiOngoing: {
    width: moderateScale(28),
    height: moderateScale(28),
    left: moderateScale(18),
    alignSelf: 'center',
  },
  paymentSuccess: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  paymentSuccess2: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  textAtas: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
  },
  textBawah: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  garis: {
    borderBottomColor: '#C3CADE',
    borderBottomWidth: moderateScale(1),
    width: moderateScale(342),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  paymentFailed: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
  paymentOngoing: {
    width: moderateScale(299),
    left: moderateScale(40),
  },
});
