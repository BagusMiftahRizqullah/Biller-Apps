import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ComListPayElec from '../../../Component/ComListPayElec/ComListPayElec';
import {moderateScale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconElectricityActive} from '../../../Assets/Assets';
import {
  ElectricityTokenAction,
  ElectricityTagihanAction,
} from '../redux/action';

const ListPaymentElectricity = props => {
  const title = props.route.params;
  console.log(title, '<<<<< ini title');
  const dispatch = useDispatch();
  const DataListElectricity = useSelector(state => {
    console.log(state, '<===== ini state');
    // ini aku tambahin untuk handling data pertama kali waktu masih null
    if (
      state.ElectricityReducer.priceList.data != null &&
      state.ElectricityReducer.priceList.data.length > 0
    ) {
      return state.ElectricityReducer.priceList.data;
    } else {
      return [];
    }
  });

  console.log(DataListElectricity, 'ini hasil data Price list Electric Token');

  useEffect(() => {
    if (title === 'PLN - Token') {
      dispatch(ElectricityTokenAction({option_id: '1'}));
    }
  }, [dispatch]);

  const DataCostomer = useSelector(state => state.GlobalReducer.Success);
  console.log(DataCostomer, 'status datacostumer');
  const alamat = 'DetailPaymentElectricity';
  const ListHarga = DataListElectricity;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.Grow} style={styles.container}>
        {title === 'PLN - Token' ? (
          <ComListPayElec
            navigation={props.navigation}
            headtitle={'Electricity'}
            headericon={IconElectricityActive}
            titleicon={title}
            titleinput={'Nomor meter'}
            datacostomer={DataCostomer}
            dataprice={ListHarga}
            alamat={alamat}
            token={true}
          />
        ) : title === 'PLN - Tagihan' ? (
          <ComListPayElec
            navigation={props.navigation}
            headtitle={'Electricity'}
            headericon={IconElectricityActive}
            titleicon={title}
            titleinput={'IDEPL'}
            datacostomer={DataCostomer}
            dataprice={ListHarga}
            alamat={alamat}
            tagihan={true}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPaymentElectricity;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  container: {
    paddingBottom: moderateScale(100),
    backgroundColor: 'white',
  },
});
