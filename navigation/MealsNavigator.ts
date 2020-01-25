// import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { navigationStyle } from '../utils';

import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from '../screens';
// import { colors } from '../constants';

// const style = {
//   headerStyle: {
//     backgroundColor: Platform.select({
//       ios: '#fff',
//       android: colors.primaryColor,
//     }),
//   },
//   headerTintColor: Platform.select({
//     ios: colors.primaryColor,
//     android: '#fff',
//   }),
// };

const screens = {
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
      ...navigationStyle,
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      ...navigationStyle,
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: {
      ...navigationStyle,
    },
  },
};

const MealsNavigator = createStackNavigator(screens);

export default createAppContainer(MealsNavigator);
