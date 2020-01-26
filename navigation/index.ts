import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { tabConfig, mealTabConfig, favTabConfig } from '../utils';

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';

const tabs = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: mealTabConfig,
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: favTabConfig,
  },
};

export const TabNavigator = Platform.select({
  ios: createBottomTabNavigator(tabs, tabConfig),
  //@ts-ignore
  android: createMaterialBottomTabNavigator(tabs, tabConfig),
});

export default createAppContainer(TabNavigator);
