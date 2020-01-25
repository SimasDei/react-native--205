import { createStackNavigator } from 'react-navigation-stack';

import { navConfig } from '../utils';

import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from '../screens';

const screens = {
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
};

export default createStackNavigator(screens, navConfig);
