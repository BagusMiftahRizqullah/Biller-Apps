import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import CoverPayment from '../../../Component/CoverPayment/CoverPayment';
import BackgroundPurple from '../../../Component/Background/BackgroundPurple';
import {IconMobileActive} from '../../../Assets/Assets';
import {NSMobileOptionAction} from '../redux/action';

const MobileOption = props => {
  const dispatch = useDispatch();
  const DataOptionMobile = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.newSubReducer.dataOptionMobile.data != null &&
      state.newSubReducer.dataOptionMobile.data.length > 0
    ) {
      return state.newSubReducer.dataOptionMobile.data;
    } else {
      return [];
    }
  });

  console.log(DataOptionMobile, 'ini hasil data option Mobile');

  useEffect(() => {
    dispatch(NSMobileOptionAction());
  }, [dispatch]);

  const dataentry = DataOptionMobile.map((d, i) => {
    return {
      NameData: d.name,
      Navigations: 'MobileTransaction',
      Page: d.name,
    };
  });

  console.log(dataentry, '<==== ini data entry');

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView
          contentContainerStyle={styles.Grow}
          style={styles.containerSub}>
          <CoverPayment
            navigation={props.navigation}
            titlecover={'Mobile'}
            iconcover={IconMobileActive}
            data={dataentry}
          />
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default MobileOption;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
});
