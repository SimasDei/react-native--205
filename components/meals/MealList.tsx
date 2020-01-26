import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { MealItem } from './MealItem';

export const MealList = ({ onMealSelect, currentMeals }) => {
  return (
    <FlatList
      style={styles.mealList}
      data={currentMeals}
      renderItem={({ item }) => <MealItem meal={item} onMealSelect={onMealSelect} />}
    />
  );
};

const styles = StyleSheet.create({
  mealList: {
    width: '100%',
    padding: 16,
  },
});

export default MealList;
