import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data';

import { CustomHeaderButton } from '../components/ui';
import { DefaultText } from '../components/ui';

const getCurrentMeal = getParam => {
  const mealId = getParam('mealId');
  return MEALS.find(meal => meal.id === mealId);
};

const renderList = items => {
  return items.map(item => (
    <View key={item} style={styles.mealItem}>
      <Text>{item}</Text>
    </View>
  ));
};

export const MealDetailScreen = ({ navigation: { popToTop, getParam } }) => {
  const currentMeal = getCurrentMeal(getParam);

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
