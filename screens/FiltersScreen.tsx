import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton, FilterSwitch } from '../components/ui';

export const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLaisLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Available Filters</Text>
      <FilterSwitch title={'Gluten-free'} isValue={isGlutenFree} setValue={setGlutenFree} />
      <FilterSwitch title={'Lactose-free'} isValue={isLactoseFree} setValue={setLaisLactoseFree} />
      <FilterSwitch title={'Vegan'} isValue={isVegan} setValue={setVegan} />
      <FilterSwitch title={'Vegetarian'} isValue={isVegetarian} setValue={setVegetarian} />
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation: { toggleDrawer, getParam } }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title={'Menu'} iconName={'ios-menu'} onPress={toggleDrawer} />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title={'Save'} iconName={'ios-save'} onPress={getParam('save')} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  screenTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;
