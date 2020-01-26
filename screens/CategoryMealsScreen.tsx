import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data';

import { MealList } from '../components/meals';

export const CategoryMealsScreen = ({ navigation: { navigate, getParam } }) => {
  const categoryId = getParam('categoryId');
  const currentMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const onMealSelect = mealId => {
    const config = {
      routeName: 'MealDetail',
      params: {
        mealId,
      },
    };
    navigate(config);
  };

  return (
    <View style={styles.screen}>
      <MealList onMealSelect={onMealSelect} currentMeals={currentMeals} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  const categoryId = getParam('categoryId');
  const { title } = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryMealsScreen;
