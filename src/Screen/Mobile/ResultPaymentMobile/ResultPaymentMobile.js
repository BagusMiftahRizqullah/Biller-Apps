import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ComResultPaymentMobile from '../../../Component/ComResultPaymentMobile/ComResultPaymentMobile';

const ResultPaymentMobile = props => {
  const title = props.route.params;
  console.log(title, '<<<<< ini titleres');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {title === 'Pulsa' ? (
          <ComResultPaymentMobile
            head={'Mobile'}
            titleicon={title}
            pulsa={true}
            navigate={props.navigation}
          />
        ) : title === 'Internet' ? (
          <ComResultPaymentMobile
            head={'Mobile'}
            titleicon={title}
            internet={true}
            navigate={props.navigation}
          />
        ) : title === 'Pasca bayar' ? (
          <ComResultPaymentMobile
            head={'Mobile'}
            titleicon={title}
            pasca={true}
            navigate={props.navigation}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPaymentMobile;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
  },
});
