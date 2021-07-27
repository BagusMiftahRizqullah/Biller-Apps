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
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {PDAMOptionAction} from './redux/action';

const NewPDAMOption = props => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const DetailRes = useSelector(state => state.PDAMReducer?.dataOption?.data);
  console.log(DetailRes, '<==== hasil resDetail PDAM');

  useEffect(() => {
    dispatch(PDAMOptionAction());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#263765',
        width: wp(100),
        height: hp(100),
      }}>
      <ScrollView
        style={{
          flexGrow: 1,
        }}>
        <View style={styles.topContainer}>
          <Text style={styles.textTitle}>PDAM</Text>
        </View>
        <TextInput
          style={styles.textContainer1}
          placeholder="Search by region"
          placeholderTextColor="#999999"
          onChangeText={text => setSearch(text)}
          value={search}
        />
        {DetailRes?.filter(data =>
          data.name.toLowerCase().includes(search.toLowerCase()),
        ).map((v, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() =>
                props.navigation.navigate('NewPDAMBlank', v?.name)
              }>
              <View style={styles.textLokasi}>
                <Text style={styles.textTitle}>{v?.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPDAMOption;

const styles = StyleSheet.create({
  topContainer: {
    top: moderateScale(10),
    height: hp(10),
    width: moderateScale(307),
    alignSelf: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    top: moderateScale(20),
  },
  textContainer1: {
    width: moderateScale(324),
    height: moderateScale(44),
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    borderWidth: 1,
    borderColor: '#999999',
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(15),
    color: 'black',
    backgroundColor: 'white',
  },
  textLokasi: {
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(30),
    left: moderateScale(34),
  },
});
