import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const CategoryMealsScreen = ({ navigation: { navigate, goBack } }) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals</Text>
      <Button title={'To Meal Details 🍔🍕🍖'} onPress={() => navigate('MealDetail')} />
      <Button title={'Go back  👈'} onPress={() => goBack()} />
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
export default CategoryMealsScreen;
