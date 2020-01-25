import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data';

export const CategoryMealsScreen = ({ navigation: { navigate, goBack, getParam } }) => {
  const categoryId = getParam('categoryId');
  const currentCategory = CATEGORIES.find(category => category.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
      <Text>{currentCategory.title} 🍽</Text>
      <Button title={'To Meal Details 🍔🍕🍖'} onPress={() => navigate('MealDetail')} />
      <Button title={'Go back  👈'} onPress={() => goBack()} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const { getParam } = navigationData.navigation;
  const categoryId = getParam('categoryId');
  const currentCategory = CATEGORIES.find(category => category.id === categoryId);

  return {
    headerTitle: currentCategory.title,
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
