import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import DropDownPicker from 'react-native-dropdown-picker';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import DetailPayment from '../../../Component/DetailPayment/DetailPayment';
import {IconElectricityActive} from '../../../Assets/Assets';

const DetailPaymentElectricity = props => {
  const title = props.route.params;
  const page1 = 'ResultPaymentElectToken';
  const page2 = 'ResultPaymentElectricity';
  console.log(title, '<<<<< ini title');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {title === 'PLN - Token' ? (
          <DetailPayment
            header={'Electricity'}
            icon={IconElectricityActive}
            titleicon={title}
            navigation={props.navigation}
            token={true}
            page={page1}
          />
        ) : title === 'PLN - Tagihan' ? (
          <DetailPayment
            header={'Electricity'}
            icon={IconElectricityActive}
            titleicon={title}
            navigation={props.navigation}
            tagihan={true}
            page={page2}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailPaymentElectricity;

const styles = StyleSheet.create({});
