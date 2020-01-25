import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../constants/';

export const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={22}
      color={Platform.OS !== 'android' ? colors.primaryColor : '#fff'}
    />
  );
};

export default CustomHeaderButton;
