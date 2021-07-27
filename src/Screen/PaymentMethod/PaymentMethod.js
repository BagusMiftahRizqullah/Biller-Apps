import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BankAccountAction, SavePaymentMethodAction} from './redux/action';
import {
  ArrowBack,
  Radio,
  RadioActive,
  IconVisa,
  IconMasterCard,
  mandiri,
  BCA,
  BNI,
} from '../../Assets/Assets';

const PaymentMethod = props => {
  const [selectBg, setSelectBg] = useState(false);
  const [radio, setRadio] = useState(false);
  const [savedata, Setsavedata] = useState({
    type: '',
    bank_destination_id: '',
    bank_name: '',
  });
  console.log(savedata, 'data full payment Method');
  const dispatch = useDispatch();
  const DataBank = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.BankReducer.dataBank.data != null &&
      state.BankReducer.dataBank.data.length > 0
    ) {
      return state.BankReducer.dataBank.data;
    } else {
      return [];
    }
  });

  useEffect(() => {
    dispatch(BankAccountAction());
  }, [dispatch]);

  const PageDetail = props.route.params + '';
  console.log(PageDetail, '<<<<< ini Page Detail');

  const paymentMethod = ['Bank Transfer', 'Credit Card'];

  const cardHide = card => {
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

  // cek info bank
  const BankInfo = b =>
    b === 'BCA' ? BCA : b === 'Mandiri' ? mandiri : b === 'BNI' ? BNI : null;

  const saveData = () => {
    dispatch(SavePaymentMethodAction(savedata));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <View style={styles.ContainerHeader}>
          <View style={styles.HeaderPayment}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.ContainerIsiPayment}>
          <View>
            {paymentMethod.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    Setsavedata({
                      ...savedata,
                      type: paymentMethod[i],
                    });
                    setSelectBg(i);
                  }}>
                  <View
                    style={[
                      styles.ContainerBank,
                      {
                        borderColor: selectBg === i ? '#3E89AE' : 'white',
                        height:
                          selectBg === i
                            ? heightPercentageToDP(30)
                            : heightPercentageToDP(7),
                      },
                    ]}>
                    <View>
                      <Text style={styles.TextBank}>{paymentMethod[i]}</Text>
                    </View>
                    {selectBg === i ? (
                      <>
                        {paymentMethod[i] === 'Bank Transfer' ? (
                          <>
                            {DataBank.map((z, x) => {
                              return (
                                <TouchableOpacity
                                  key={x}
                                  onPress={() => {
                                    Setsavedata({
                                      ...savedata,
                                      bank_destination_id: z.id,
                                      bank_name: z.account_bank,
                                    });
                                    setRadio(x);
                                  }}>
                                  <View style={styles.ContainerRadio}>
                                    <FastImage
                                      style={styles.RadioBtn}
                                      source={radio === x ? RadioActive : Radio}
                                      resizeMode={FastImage.resizeMode.contain}
                                    />
                                    <FastImage
                                      style={styles.LogoBank}
                                      source={BankInfo(z.account_bank)}
                                      resizeMode={FastImage.resizeMode.contain}
                                    />
                                    <Text style={styles.NumberCard}>
                                      {cardHide(z.account_number)}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              );
                            })}
                          </>
                        ) : null}
                        {paymentMethod[i] === 'Bank Transfer' ? null : (
                          <TouchableOpacity
                            style={styles.ContainerAdd}
                            onPress={() =>
                              props.navigation.navigate('AddPaymentCard')
                            }>
                            <Text style={styles.TextAddCard}>Add NewCard</Text>
                          </TouchableOpacity>
                        )}
                      </>
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          saveData(), props.navigation.navigate(PageDetail);
        }}>
        <View style={styles.ContainerSave}>
          <Text style={styles.TextButtonSave}>SAVE</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
  ContainerHeader: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(9),
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
  ContainerIsiPayment: {
    marginTop: moderateScale(14),
    marginLeft: moderateScale(28),
  },
  ContainerBank: {
    marginTop: moderateScale(14),
    width: widthPercentageToDP(85),
    borderTopStartRadius: moderateScale(13),
    borderTopEndRadius: moderateScale(13),
    borderBottomStartRadius: moderateScale(13),
    borderBottomEndRadius: moderateScale(13),
    backgroundColor: 'white',
    elevation: moderateScale(8),
    borderWidth: moderateScale(2),
  },
  TextBank: {
    color: '#333333',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(18),
  },
  ContainerRadio: {
    margin: moderateScale(7),
    marginLeft: moderateScale(10),
    paddingLeft: moderateScale(5),
    height: moderateScale(43),
    width: moderateScale(285),
    borderWidth: moderateScale(1),
    backgroundColor: 'white',
    borderColor: '#999999',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  RadioBtn: {
    height: heightPercentageToDP(2),
    width: widthPercentageToDP(6),
    marginRight: moderateScale(8),
    marginTop: moderateScale(13),
  },
  LogoBank: {
    alignSelf: 'center',
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(10),
  },
  NumberCard: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
    marginLeft: moderateScale(24),
  },
  AddCard: {
    alignSelf: 'center',
    marginTop: moderateScale(8),
    height: moderateScale(53),
    width: moderateScale(290),
    elevation: moderateScale(24),
    zIndex: 1000,
  },

  ContainerAdd: {
    marginTop: moderateScale(10),
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
  ContainerSave: {
    marginBottom: widthPercentageToDP(6),
    marginHorizontal: widthPercentageToDP(6),
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(88),
    alignItems: 'center',
  },
  TextButtonSave: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
});
