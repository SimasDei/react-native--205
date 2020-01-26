import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data';

import { MealList } from '../components/meals';
import { CustomHeaderButton } from '../components/ui';

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

FavoritesScreen.navigationOptions = ({ navigation: { toggleDrawer } }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title={'Menu'} iconName={'ios-menu'} onPress={toggleDrawer} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
