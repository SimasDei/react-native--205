import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data';
import { IMeals } from '../types';

import { MealList } from '../components/meals';
import { DefaultText } from '../components/ui';

export const CategoryMealsScreen = ({ navigation: { navigate, getParam } }) => {
  const categoryId = getParam('categoryId');
  const availableMeals = useSelector((state: IMeals) => state.meals.filteredMeals);
  const favoriteMeals = useSelector((state: IMeals) => state.meals.favoriteMeals);
  const currentMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const onMealSelect = ({ id, title }) => {
    const config = {
      routeName: 'MealDetail',
      params: {
        mealId: id,
        title,
        isFavorite: favoriteMeals.some(meal => meal.id === id),
      },
    };
    navigate(config);
  };

  if (!currentMeals.length)
    return (
      <View style={styles.notFound}>
        <DefaultText>No meals found 🍽 toggle filters ⚙</DefaultText>
      </View>
    );

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
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CategoryMealsScreen;
