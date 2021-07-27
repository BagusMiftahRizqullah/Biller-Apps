import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../Assets/Color/Color';

export default function BackgroundPurple(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.bigRect, styles.top]} />
      <View style={[styles.bigRect, styles.bottom]} />
      <View style={[styles.smallRect, styles.bottomLeft]} />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.purple.purpleBold,
  },
  StyleOverflow: {
    position: 'absolute',
  },
  bigRect: {
    height: moderateScale(380),
    width: moderateScale(380),
    backgroundColor: COLOR.purple.purple10,
    opacity: 0.05,
    borderRadius: moderateScale(60),

    // transform: [{rotate: '-45deg'}],
  },
  top: {
    position: 'absolute',
    top: moderateScale(-188),
    left: moderateScale(-60),
  },
  bottom: {
    position: 'absolute',
    bottom: moderateScale(-188),
    right: moderateScale(-60),
  },
  smallRect: {
    height: moderateScale(200),
    width: moderateScale(200),
    backgroundColor: COLOR.purple.purple30,
    opacity: 0.1,
    borderRadius: moderateScale(40),
  },
  bottomLeft: {
    position: 'absolute',
    bottom: moderateScale(-100),
    left: moderateScale(-50),
  },
});
