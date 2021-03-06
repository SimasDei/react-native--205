import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import { IMeals } from '../types';
import { MTypes } from '../state/types';

import { CustomHeaderButton } from '../components/ui';
import { DefaultText } from '../components/ui';

const getCurrentMeal = getParam => {
  const mealId = getParam('mealId');
  const meals = useSelector((state: IMeals) => state.meals.meals);

  return meals.find(meal => meal.id === mealId);
};

const renderList = items => {
  return items.map(item => (
    <View key={item} style={styles.mealItem}>
      <Text>{item}</Text>
    </View>
  ));
};

export const MealDetailScreen = ({ navigation: { getParam, setParams } }) => {
  const dispatch = useDispatch();
  const currentMeal = getCurrentMeal(getParam);
  const isFavorite = useSelector((state: IMeals) =>
    state.meals.favoriteMeals.some(meal => meal.id === currentMeal.id),
  );

  const togleFavoriteHandler = useCallback(() => {
    dispatch({ type: MTypes.TOGGLE_FAVORITE_ASYNC, id: currentMeal.id });
  }, [dispatch, currentMeal]);

  useEffect(() => {
    setParams({ toggleFav: togleFavoriteHandler });
    setParams({ isFavorite });
  }, [togleFavoriteHandler, isFavorite]);

  return (
    <ScrollView>
      <Image style={styles.mealImage} source={{ uri: currentMeal.imageUrl }} />
      <View style={styles.mealDetails}>
        <DefaultText style={styles.mealDetailsText}>{currentMeal.duration}m. ⏰</DefaultText>
        <DefaultText style={styles.mealDetailsText}>{currentMeal.complexity} ⚖</DefaultText>
        <DefaultText style={styles.mealDetailsText}>{currentMeal.affordability} 💲</DefaultText>
      </View>
      <Text style={styles.mealTitle}>Ingredients</Text>
      {renderList(currentMeal.ingredients)}
      <Text style={styles.mealTitle}>Steps</Text>
      {renderList(currentMeal.steps)}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation: { getParam } }) => {
  const toggleFavorite = getParam('toggleFav');
  const isFavorite = getParam('isFavorite');
  return {
    headerTitle: getParam('title'),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={'Favorite'}
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  mealDetails: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
  },
  mealDetailsText: {
    textTransform: 'uppercase',
  },
});

export default MealDetailScreen;
