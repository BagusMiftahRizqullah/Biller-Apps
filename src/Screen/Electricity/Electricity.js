import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CoverPayment from '../../Component/CoverPayment/CoverPayment';
import {IconElectricityActive} from '../../Assets/Assets';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {useDispatch, useSelector} from 'react-redux';
import {ElectricityOptionAction} from './redux/action';

const Electricity = props => {
  const dispatch = useDispatch();
  const DataOptionElectricity = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.ElectricityReducer.dataOption.data != null &&
      state.ElectricityReducer.dataOption.data.length > 0
    ) {
      return state.ElectricityReducer.dataOption.data;
    } else {
      return [];
    }
  });

  console.log(DataOptionElectricity, 'ini hasil data option internet tv');

  useEffect(() => {
    dispatch(ElectricityOptionAction());
  }, [dispatch]);

  const dataentry = DataOptionElectricity.map((d, i) => {
    return {
      NameData: d.name,
      Navigations: 'ListPaymentElectricity',
      Page: d.name,
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView
          contentContainerStyle={styles.Grow}
          style={styles.containerSub}>
          <CoverPayment
            navigation={props.navigation}
            titlecover={'Electricity'}
            iconcover={IconElectricityActive}
            data={dataentry}
          />
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default Electricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
});
