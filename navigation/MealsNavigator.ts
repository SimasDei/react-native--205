import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from '../screens';
import { colors } from '../constants';

const screens = {
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
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
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
};

const MealsNavigator = createStackNavigator(screens);

export default createAppContainer(MealsNavigator);
