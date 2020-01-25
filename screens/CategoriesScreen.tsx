import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data';

import { CategoryGridTile } from '../components/categories';

export const CategoriesScreen = ({ navigation: { navigate } }) => {
  const navigationHandler = (categoryId: string) => {
    const config = {
      routeName: 'CategoryMeals',
      params: {
        categoryId,
      },
    };

    navigate(config);
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile item={item} navigationHandler={navigationHandler} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
  },
});

export default CategoriesScreen;
