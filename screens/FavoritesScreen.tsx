import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data';

import { MealList } from '../components/meals';

export const FavoritesScreen = ({ navigation: { navigate, getParam } }) => {
  const currentMeals = MEALS.filter((_, index) => index < 2);

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
