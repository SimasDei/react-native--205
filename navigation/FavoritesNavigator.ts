import { createStackNavigator } from 'react-navigation-stack';

import { navConfig } from '../utils';
import { FavoritesScreen } from '../screens';

const screens = {
  Favorite: {
    screen: FavoritesScreen,
    navigationOptions: {
      headerTitle: 'Favorites',
    },
  },
};

export default createStackNavigator(screens, navConfig);
