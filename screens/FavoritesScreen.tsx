import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import { IMeals } from '../types';

import { MealList } from '../components/meals';
import { CustomHeaderButton } from '../components/ui';

export const FavoritesScreen = ({ navigation: { navigate } }) => {
  const favoriteMeals = useSelector((state: IMeals) => state.meals.favoriteMeals);

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
      <MealList onMealSelect={onMealSelect} currentMeals={favoriteMeals} />
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
