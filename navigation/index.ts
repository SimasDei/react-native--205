import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { tabConfig, mealTabConfig, favTabConfig, drawerOptions } from '../utils';

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import FiltersNavigator from './FiltersNavigator';

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

const drawers = {
  MealsAndFavorites: {
    screen: TabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
    },
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filters',
    },
  },
};

const MainNavigator = createDrawerNavigator(drawers, drawerOptions);

export default createAppContainer(MainNavigator);
