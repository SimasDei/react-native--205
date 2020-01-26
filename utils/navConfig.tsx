import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants';

export const navigationStyle = {
  headerStyle: {
    backgroundColor: Platform.select({
      ios: '#fff',
      android: colors.primaryColor,
    }),
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerTintColor: Platform.select({
    ios: colors.primaryColor,
    android: '#fff',
  }),
};

export const navConfig = {
  defaultNavigationOptions: {
    ...navigationStyle,
  },
};

export const tabConfig = {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans',
    },
    activeTintColor: colors.accentColor,
  },
};

export const mealTabConfig = {
  tabBarIcon: tabInfo => <Ionicons name={'ios-restaurant'} color={tabInfo.tintColor} size={25} />,
  shifting: true,
  tabBarColor: colors.primaryColorDark,
};

export const favTabConfig = {
  tabBarIcon: tabInfo => <Ionicons name={'ios-star'} color={tabInfo.tintColor} size={25} />,
  shifting: true,
  tabBarColor: colors.primaryColor,
};

export const drawerOptions = {
  contentOptions: {
    activeTintColor: colors.primaryColor,
    labelStyle: {
      fontFamily: 'open-sans-bold',
    },
  },
};
