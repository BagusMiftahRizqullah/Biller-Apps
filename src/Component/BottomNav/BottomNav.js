import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Subscription, History, Profile} from '../../Screen/Screen';

const Bot = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Bot.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#4493AC',
        style: {
          height: hp(7),
          borderTopWidth: 0,
          marginTop: 0,
          paddingBottom: hp(1),
          borderBottomColor: 'white',
        },
      }}>
      <Bot.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Foundation
              name="home"
              size={26}
              color={focused ? '#4493AC' : '#C3CADE'}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Bot.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="image"
              size={26}
              color={focused ? '#4493AC' : '#C3CADE'}
            />
          ),
        }}
        name="Subscription"
        component={Subscription}
      />
      <Bot.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="bag-checked"
              size={26}
              color={focused ? '#4493AC' : '#C3CADE'}
            />
          ),
        }}
        name="History"
        component={History}
      />
      <Bot.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="folder"
              size={26}
              color={focused ? '#4493AC' : '#C3CADE'}
            />
          ),
        }}
        name="Account"
        component={Profile}
      />
    </Bot.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
