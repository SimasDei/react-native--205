// @ts-nocheck

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data';

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

  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => navigationHandler(item.id)}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />;
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
