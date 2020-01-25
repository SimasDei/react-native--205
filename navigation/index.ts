import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { navigationStyle } from '../utils';

import MealsNavigator from './MealsNavigator';
import FavoritesNavigator from './FavoritesNavigator';

export const config = {
  defaultNavigationOptions: {
    ...navigationStyle,
  },
};

const tabs = {
  Meals: {
    screen: MealsNavigator,
  },
  Favorites: {
    screen: FavoritesNavigator,
  },
};

export const TabNavigator = createBottomTabNavigator(tabs);

export default createAppContainer(TabNavigator);
