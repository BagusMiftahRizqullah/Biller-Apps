import React from 'react';
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
// background
import BackgroundPurple from '../../../Component/Background/BackgroundPurple';
// Icon
import {ArrowBack, IconInternetActive} from '../../../Assets/Assets';

const InTvOption = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundPurple>
        <ScrollView>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity
              style={styles.iconTop}
              onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>Internet & TV</Text>
          </View>
          <View>
            <View style={styles.allToken}>
              <TouchableOpacity
                style={styles.containerToken}
                onPress={() => props.navigation.navigate('InTvTransaction')}>
                <FastImage
                  style={styles.styleMobile}
                  source={IconInternetActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>IndiHome</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity
                style={styles.containerToken}
                onPress={() => props.navigation.navigate('InTvTransaction')}>
                <FastImage
                  style={styles.styleMobile}
                  source={IconInternetActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>MNC Play</Text>
            </View>
            <View style={styles.allToken}>
              <TouchableOpacity
                style={styles.containerToken}
                onPress={() => props.navigation.navigate('InTvTransaction')}>
                <FastImage
                  style={styles.styleMobile}
                  source={IconInternetActive}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
              <Text style={styles.huruf}>Biznet Home</Text>
            </View>
          </View>
        </ScrollView>
      </BackgroundPurple>
    </SafeAreaView>
  );
};

export default InTvOption;

const styles = StyleSheet.create({
  HeaderBilling: {
    flexDirection: 'row',
    width: wp(100),
    height: hp(8),
  },
  iconTop: {
    top: moderateScale(24),
    left: moderateScale(25),
  },
  ArrowBack: {
    height: hp(2),
    width: wp(6),
  },
  Judul: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(20),
    left: moderateScale(45),
  },
  allToken: {
    flexDirection: 'row',
    marginTop: moderateScale(14),
    left: moderateScale(25),
    height: moderateScale(70),
  },
  containerToken: {
    width: moderateScale(55),
    height: moderateScale(54),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
  },
  styleMobile: {
    backgroundColor: 'white',
    height: moderateScale(30),
    width: moderateScale(21),
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  huruf: {
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
    marginTop: moderateScale(15),
    left: moderateScale(20),
    color: 'white',
  },
});
