import { createStackNavigator } from 'react-navigation-stack';

import { navConfig } from '../utils';
import { FiltersScreen } from '../screens';

const screens = {
  Favorite: {
    screen: FiltersScreen,
    navigationOptions: {
      headerTitle: 'Filters',
    },
  },
};

export default createStackNavigator(screens, navConfig);
