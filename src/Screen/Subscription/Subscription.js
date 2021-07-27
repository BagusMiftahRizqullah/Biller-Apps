import React, {useState, useEffect} from 'react';
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
import {IconFilter, ButtonNewSub, IconSubscribtion} from '../../Assets/Assets';
import PaymentCard from '../../Component/PaymentCard/PaymentCard';
import BackgroundPurple from '../../Component/Background/BackgroundPurple';
import {COLOR} from '../../Assets/Color/Color';

const Subscription = props => {
  const data = props.route.params;
  console.log(data, '<<<<< ini data');
  const [visible, setVisible] = useState(false);
  // const [datafilter, setDataFilter] = useState([data]);

  const subscribtion = true;

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Headerr  */}

      <ScrollView
        contentContainerStyle={styles.Grow}
        style={styles.containerSub}>
        <View style={styles.containerHead}>
          <Text style={styles.TextHead}>Recurring Billing</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('FilterSubscription')}>
            <FastImage
              style={styles.IconFilter}
              source={IconFilter}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ContainerResFilter}>
          {data ? (
            <View style={styles.ResFilter}>
              <View style={styles.ContainerTexFil}>
                <Text style={styles.textfil}>{data?.status}</Text>
              </View>
              <View style={styles.ContainerTexFil}>
                <Text style={styles.textfil}>{data?.category}</Text>
              </View>
              <View style={styles.ContainerTexFil}>
                <Text style={styles.textfil}>{data?.period}</Text>
              </View>
            </View>
          ) : null}
        </View>

        {/* DATA ada */}
        {subscribtion ? (
          <View>
            <PaymentCard late={true} navigation={props.navigation} />
            <PaymentCard
              late={false}
              success={false}
              navigation={props.navigation}
            />
            <PaymentCard success={true} />
          </View>
        ) : (
          <View style={styles.ContainerImgSub}>
            <View style={styles.ImgSub}>
              <FastImage
                style={styles.Subscription}
                source={IconSubscribtion}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={styles.TextSubs}>You don't have any subscribtion</Text>
            <TouchableOpacity style={styles.ContainerButtonSubs}>
              <View style={styles.ButtonSubs}>
                <Text style={styles.TextButtonSubs}>Create New</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      {subscribtion ? (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewSubscription')}
          style={styles.PresNewSub}>
          <FastImage
            style={styles.ButtonNewSub}
            source={ButtonNewSub}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
    backgroundColor: '#263765',
  },
  containerHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: heightPercentageToDP(2),
    paddingLeft: widthPercentageToDP(5),
    paddingRight: widthPercentageToDP(7),
  },
  TextHead: {
    color: 'white',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Regular',
  },
  IconFilter: {
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(5),
  },
  ContainerResFilter: {
    marginTop: heightPercentageToDP(3),
    marginLeft: widthPercentageToDP(5),
    marginRight: widthPercentageToDP(5),
    marginBottom: heightPercentageToDP(3),
  },
  ResFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ContainerTexFil: {
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: moderateScale(80),
    height: moderateScale(28),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.9,
    marginTop: moderateScale(12),
    marginRight: moderateScale(8),
  },
  textfil: {
    color: '#263765',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonNewSub: {
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(20),
  },
  PresNewSub: {
    position: 'absolute',
    margin: moderateScale(0),
    right: moderateScale(0),
    bottom: moderateScale(-36),
  },
  ContainerImgSub: {
    marginTop: heightPercentageToDP(10),
    display: 'flex',
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(40),
    alignSelf: 'center',
  },
  ImgSub: {
    alignItems: 'center',
  },
  Subscription: {
    height: heightPercentageToDP(24),
    width: widthPercentageToDP(30),
    justifyContent: 'center',
    color: COLOR.purple.purpleBold,
    fontSize: moderateScale(13),
  },
  TextSubs: {
    color: COLOR.purple.purpleBold,
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    paddingBottom: moderateScale(18),
  },
  ContainerButtonSubs: {
    alignSelf: 'center',
    backgroundColor: '#4493AC',
    borderTopStartRadius: moderateScale(5),
    borderTopEndRadius: moderateScale(5),
    borderBottomStartRadius: moderateScale(5),
    borderBottomEndRadius: moderateScale(5),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(80),
  },
  ButtonSubs: {
    color: 'white',
    fontSize: moderateScale(21),
    paddingTop: moderateScale(5),
    fontFamily: 'Montserrat-Bold',
  },
  TextButtonSubs: {
    alignSelf: 'center',
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-Bold',
    paddingTop: moderateScale(5),
  },
});
