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
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../Component/Loading/Loading';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const CoverPayment = ({navigation, titlecover, iconcover, data}) => {
  const dataentry = data;
  console.log(dataentry, ' ini hasil componen cover');
  const isLoading = useSelector(state => state.GlobalReducer.Loading);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.Grow}
        style={styles.containerSub}>
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <View style={styles.ContainerHeader}>
                <Text style={styles.TextHeader}>{titlecover}</Text>
              </View>
              {dataentry.map((v, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => navigation.navigate(v.Navigations, v.Page)}>
                    <View style={styles.ContainerList}>
                      <View style={styles.ContainerLogo}>
                        <FastImage
                          style={styles.Logo}
                          source={iconcover}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                      </View>
                      <View style={styles.ContainerText}>
                        <Text style={styles.TextList}>{v.NameData}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View />
            </>
          )}
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoverPayment;

const styles = StyleSheet.create({
  Grow: {
    flexGrow: 1,
  },
  containerSub: {
    paddingBottom: moderateScale(100),
  },
  ContainerHeader: {
    marginLeft: widthPercentageToDP(8),
    marginTop: heightPercentageToDP(3),
  },
  TextHeader: {
    color: '#ffffff',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  ContainerList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ContainerLogo: {
    marginLeft: widthPercentageToDP(8),
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(16),
    height: heightPercentageToDP(8),
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: moderateScale(8),
  },
  Logo: {
    alignSelf: 'center',
    width: widthPercentageToDP(6),
    height: heightPercentageToDP(8),
  },
  ContainerText: {
    marginTop: moderateScale(55),
    marginLeft: moderateScale(24),
  },
  TextList: {
    color: '#ffffff',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Bold',
  },
  Containerisi: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
  },
});
