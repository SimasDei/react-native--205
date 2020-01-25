import { Platform } from 'react-native';
import { colors } from '../constants';

export const navigationStyle = {
  headerStyle: {
    backgroundColor: Platform.select({
      ios: '#fff',
      android: colors.primaryColor,
    }),
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
