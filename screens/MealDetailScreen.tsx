import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data';

import { CustomHeaderButton } from '../components/ui';

const getCurrentMeal = getParam => {
  const mealId = getParam('mealId');
  return MEALS.find(meal => meal.id === mealId);
};

export const MealDetailScreen = ({ navigation: { popToTop, getParam } }) => {
  const currentMeal = getCurrentMeal(getParam);

  return (
    <View style={styles.screen}>
      <Text>{currentMeal.title} 🍅🍆🍇🍉</Text>
      <Button title={'Go back to categories 👈✌'} onPress={() => popToTop()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation: { getParam } }) => {
  const { title } = getCurrentMeal(getParam);

  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={'Favorite'}
          iconName={'ios-star'}
          onPress={() => {
            console.log('Ahoy Sailor o/ 🚤');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
