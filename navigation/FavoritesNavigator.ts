import { createStackNavigator } from 'react-navigation-stack';

import { navConfig } from '../utils';
import { FavoritesScreen, MealDetailScreen } from '../screens';

const screens = {
  Favorite: {
    screen: FavoritesScreen,
    navigationOptions: {
      headerTitle: 'Favorites',
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
};

export default createStackNavigator(screens, navConfig);
