import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data';

import { MealList } from '../components/meals';

interface IState {
  meals: {
    filteredMeals: any[];
  };
}

export const CategoryMealsScreen = ({ navigation: { navigate, getParam } }) => {
  const categoryId = getParam('categoryId');
  const availableMeals = useSelector((state: IState) => state.meals.filteredMeals);
  const currentMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const onMealSelect = ({ id, title }) => {
    const config = {
      routeName: 'MealDetail',
      params: {
        mealId: id,
        title,
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
