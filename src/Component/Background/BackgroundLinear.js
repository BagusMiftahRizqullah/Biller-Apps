import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {IconBiller} from '../../Assets/Assets';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function BackgroundLinear(props) {
  return (
    <LinearGradient
      colors={['#C3FFED', '#FFC8D5', '#FFFFFF']}
      start={{x: 1.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5, 0.6]}
      style={styles.container}>
      {props.children}
      {/* <LinearGradient
        colors={['#364F90', '#9CCCBE', '#FAC9D6']}
        start={{x: 1.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        style={[styles.bigRect, styles.top]}>
        <FastImage
          style={styles.imageBiller}
          source={IconBiller}
          resizeMode={FastImage.resizeMode.contain}
        />
      </LinearGradient> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bigRect: {
    height: moderateScale(380),
    width: moderateScale(380),
    opacity: 0.8,
    borderRadius: moderateScale(60),
    transform: [{rotate: '-45deg'}],
  },
  top: {
    position: 'absolute',
    top: moderateScale(-298),
    right: moderateScale(-60),
  },
  imageBiller: {
    height: hp(8),
    width: wp(8),
  },
});
