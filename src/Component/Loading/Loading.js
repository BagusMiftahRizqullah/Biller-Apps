import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
      }}>
      <LottieView
        source={require('../../Assets/Fixloader.json')}
        autoPlay
        loop
        speed={1}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
