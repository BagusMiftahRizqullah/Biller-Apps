import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import {useDispatch, useSelector} from 'react-redux';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {IconInternetActive} from '../../Assets/Assets';
import {inTvOptionAction} from './redux/action';

const InternetTv = props => {
  const dispatch = useDispatch();
  const DataOptionInTv = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.inTvReducer.dataOption.data != null &&
      state.inTvReducer.dataOption.data.length > 0
    ) {
      return state.inTvReducer.dataOption.data;
    } else {
      return [];
    }
  });

  console.log(DataOptionInTv, 'ini hasil data option internet tv');

  useEffect(() => {
    dispatch(inTvOptionAction());
  }, [dispatch]);

  const dataentry = DataOptionInTv.map((d, i) => {
    return {
      NameData: d.option,
      Navigations: 'ListPaymentInternetTv',
      Page: d.option,
    };
  });

  // const dataentry = [
  //   {
  //     NameData: 'IndiHome',
  //     Naigation: 'ListPaymentInternetTv',
  //     Page: 'IndiHome',
  //   },
  //   {
  //     NameData: 'MNC Play',
  //     Naigation: 'ListPaymentInternetTv',
  //     Page: 'MNC Play',
  //   },
  //   {
  //     NameData: 'Biznet Home',
  //     Naigation: 'ListPaymentInternetTv',
  //     Page: 'Biznet Home',
  //   },
  // ];

  console.log(dataentry, '<==== ini data entry');

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView
          contentContainerStyle={styles.Grow}
          style={styles.containerSub}>
          <CoverPayment
            navigation={props.navigation}
            titlecover={'Internet & Tv'}
            iconcover={IconInternetActive}
            data={dataentry}
          />
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default InternetTv;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
});
