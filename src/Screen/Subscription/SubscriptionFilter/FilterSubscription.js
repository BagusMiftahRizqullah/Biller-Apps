import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CheckBox} from 'react-native-elements';
import {ArrowBack, CheckActive, CheckBox1} from '../../../Assets/Assets';

const FilterSubscription = props => {
  const [statuschecked, SetStatusChecked] = useState([]);
  const [categorychecked, SetCategoryChecked] = useState([]);
  const [periodchecked, SetPeriodChecked] = useState([]);
  const [senddata, Setsenddata] = useState({
    status: '',
    category: '',
    period: '',
  });

  // const Data = props.route.params;
  // console.log(props.ContainerButtonFillter, 'datasss');
  // console.log(statuschecked, 'status');
  const Status = [
    {StatusName: 'Active', checked: false},
    {StatusName: 'Planned', checked: false},
  ];
  const Category = [
    'Electricity',
    'Mobile',
    'Internet',
    'Landline',
    'PDAM',
    'BPJS',
  ];
  const Period = ['Weekly', 'Monthly', 'Annualy'];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerScroll}>
          <View style={styles.HeaderFillter}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Filter</Text>
          </View>
        </View>
        <View style={styles.ContainerCheck}>
          <View style={styles.ContainerStatus}>
            <Text style={styles.HeaderStatus}>Status</Text>
          </View>
          {Status.map((v, i) => {
            return (
              <View key={i} style={styles.ListCheck}>
                <TouchableOpacity
                  onPress={() => {
                    Setsenddata({
                      ...senddata,
                      status: Status[i].StatusName,
                    });
                    SetStatusChecked(i);
                  }}>
                  <FastImage
                    style={styles.Check}
                    source={statuschecked === i ? CheckActive : CheckBox1}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.IsiFillter}>{Status[i].StatusName}</Text>
              </View>
            );
          })}

          <View style={styles.ContainerStatus}>
            <Text style={styles.HeaderStatus}>Category</Text>
          </View>
          {Category.map((v, i) => {
            return (
              <View key={i} style={styles.ListCheck}>
                <TouchableOpacity
                  onPress={() => {
                    Setsenddata({
                      ...senddata,
                      category: Category[i],
                    });
                    SetCategoryChecked(i);
                  }}>
                  <FastImage
                    style={styles.Check}
                    source={categorychecked === i ? CheckActive : CheckBox1}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.IsiFillter}>{Category[i]}</Text>
              </View>
            );
          })}

          <View style={styles.ContainerStatus}>
            <Text style={styles.HeaderStatus}>Period</Text>
          </View>
          {Period.map((v, i) => {
            return (
              <View key={i} style={styles.ListCheck}>
                <TouchableOpacity
                  onPress={() => {
                    Setsenddata({
                      ...senddata,
                      period: Period[i],
                    });
                    SetPeriodChecked(i);
                  }}>
                  <FastImage
                    style={styles.Check}
                    source={periodchecked === i ? CheckActive : CheckBox1}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </TouchableOpacity>
                <Text style={styles.IsiFillter}>{Period[i]}</Text>
              </View>
            );
          })}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Subscription', senddata)}
            style={styles.ContainerButtonFillter}>
            <View style={styles.ButtonFilter}>
              <Text style={styles.TextButtonFilter}>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterSubscription;

const styles = StyleSheet.create({
  ContainerScroll: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(9),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderFillter: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(12),
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
  ContainerCheck: {
    marginLeft: moderateScale(34),
    // marginTop: moderateScale(16),
  },

  HeaderStatus: {
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    marginTop: moderateScale(16),
    marginBottom: moderateScale(12),
  },
  garis: {
    paddingLeft: 10,
    height: 6,
    borderStyle: 'dashed',
    borderColor: 'red',
    borderTopColor: 'black',
  },
  Check: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
    marginRight: moderateScale(10),
  },
  ListCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IsiFillter: {
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
  ContainerButtonFillter: {
    alignItems: 'center',
    paddingRight: widthPercentageToDP(8),
    marginTop: moderateScale(15),
    paddingTop: moderateScale(12),
  },
  ButtonFilter: {
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(80),
    alignItems: 'center',
  },
  TextButtonFilter: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(8),
  },
});
