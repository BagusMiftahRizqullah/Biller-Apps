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
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import PaymentCard from '../../../Component/PaymentCard/PaymentCard';
import {ArrowBack} from '../../../Assets/Assets';

const RecurringBilling = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.containerHead}>
          <View style={styles.HeaderBilling}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <FastImage
                style={styles.ArrowBack}
                source={ArrowBack}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <Text style={styles.Judul}>RecurringBilling</Text>
          </View>
        </View>
        <View style={styles.ContainerBilling}>
          <PaymentCard late={true} detail={true} />
        </View>
        <TouchableOpacity style={styles.ContainerCancle}>
          <View>
            <Text style={styles.TextCancle}> Cancle Subscription</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecurringBilling;

const styles = StyleSheet.create({
  containerHead: {
    backgroundColor: '#263765',
    height: heightPercentageToDP(9),
    borderBottomLeftRadius: moderateScale(16),
    borderBottomRightRadius: moderateScale(16),
  },
  HeaderBilling: {
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
  ContainerBilling: {
    marginTop: heightPercentageToDP(15),
  },
  ContainerCancle: {
    marginTop: heightPercentageToDP(13),
    alignSelf: 'center',
  },
  TextCancle: {
    color: '#EB5757',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(18),
  },
});
