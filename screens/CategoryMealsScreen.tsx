import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data';

import { MealItem } from '../components/meals';

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
      <FlatList
        style={styles.mealList}
        data={currentMeals}
        renderItem={({ item }) => <MealItem meal={item} onMealSelect={onMealSelect} />}
      />
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
    padding: 16,
  },
  mealList: {
    width: '100%',
  },
});
export default CategoryMealsScreen;
