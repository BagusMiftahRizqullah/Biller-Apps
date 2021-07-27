import React, {useEffect, useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CheckBox} from 'react-native-elements';
import {AddNewCardAction} from './redux/action';
import {
  ArrowBack,
  Radio,
  RadioActive,
  IconVisa,
  AddNewCard,
} from '../../Assets/Assets';

const AddPaymentCard = props => {
  const [cardnumber, setCardNumber] = useState('');
  const [holdername, setHolderName] = useState('');
  const [expiredate, setExpireDate] = useState('');
  const [kode, setKode] = useState('');
  const dispatch = useDispatch();

  const submitData = () => {
    dispatch(
      AddNewCardAction({
        cardNumber: cardnumber,
        cardHolderName: holdername,
        expireDate: expiredate,
        cvv: kode,
        type: 'Credit Card',
      }),
    );
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
            <Text style={styles.Judul}>Add New Card</Text>
          </View>
        </View>
        <View style={styles.ContainerIsiPayment}>
          <View style={styles.ContainerForm}>
            <View>
              <Text style={styles.Label}>Card Number</Text>
              <View style={styles.ContainerTextInput}>
                <TextInput
                  style={styles.inputText}
                  keyboardType="numeric"
                  placeholder=" xxxx xxxx xxxx xxxx"
                  onChangeText={text => setCardNumber(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.Label}>Card Holder Name</Text>
              <View style={styles.ContainerTextInput}>
                <TextInput
                  style={styles.inputText}
                  placeholder=" Your Name On The Card"
                  onChangeText={text => setHolderName(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.Label}>Expiry date</Text>
              <View style={styles.ContainerTextInput}>
                <TextInput
                  style={styles.inputText}
                  placeholder=" YYYY-MM-DD"
                  onChangeText={text => setExpireDate(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.Label}>CVV/CVC</Text>
              <View style={styles.ContainerTextInput}>
                <TextInput
                  style={styles.inputText}
                  placeholder=" CVV"
                  onChangeText={text => setKode(text)}
                />
              </View>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity onPress={submitData}>
                <View style={styles.ContainerSave}>
                  <Text style={styles.TextButtonSave}>SAVE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPaymentCard;

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
  },
  ContainerForm: {
    alignItems: 'center',
  },
  Label: {
    color: '#000000',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(18),
  },
  ContainerTextInput: {
    borderRadius: moderateScale(8),
    height: moderateScale(42),
    width: moderateScale(290),
    marginTop: moderateScale(4),
    borderWidth: moderateScale(1),
    borderColor: '#828282',
  },
  inputText: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8),
  },

  containerButton: {
    marginTop: heightPercentageToDP(28),
  },

  ContainerSave: {
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(87),
    alignItems: 'center',
  },
  TextButtonSave: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(11),
  },
});
