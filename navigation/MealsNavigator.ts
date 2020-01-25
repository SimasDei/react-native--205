import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { navigationStyle } from '../utils';

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

const config = {
  defaultNavigationOptions: {
    ...navigationStyle,
  },
};

const MealsNavigator = createStackNavigator(screens, config);

export default createAppContainer(MealsNavigator);
