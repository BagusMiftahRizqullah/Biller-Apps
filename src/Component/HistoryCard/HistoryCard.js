import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Overlay, BottomSheet} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconElectricityActive, IconMobileActive} from '../../Assets/Assets';

const HistoryCard = ({PLN = false, Pulsa = false}) => {
  const styles = StyleSheet.create({
    topContainer: {
      backgroundColor: 'white',
      height: moderateScale(236),
    },
  });

  return (
    <View style={styles.topContainer}>
      <View>
        <Text>PLN - Token</Text>
      </View>
      <View>
        <Text>PLN - Token</Text>
      </View>
      <View>
        <Text>Pulsa - Telkomsel</Text>
      </View>
    </View>
  );
};
