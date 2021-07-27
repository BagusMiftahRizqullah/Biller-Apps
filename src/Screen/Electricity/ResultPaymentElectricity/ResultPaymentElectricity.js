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
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconElectricityActive} from '../../../Assets/Assets';
import ComResultPaymentElect from '../../../Component/ComResultPaymentElect/ComResultPaymentElect';

const ResultPaymentElectricity = props => {
  const titles = props.route.params;
  console.log(titles, '<<<<< ini titleres');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        <ComResultPaymentElect
          navigate={props.navigation}
          head={'Electricity'}
          titleicon={titles}
          icon={IconElectricityActive}
          tagihan={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPaymentElectricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
  },
});
