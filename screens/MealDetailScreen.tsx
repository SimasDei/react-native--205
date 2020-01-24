import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MealDetailScreen = ({ navigation: { popToTop } }) => {
  return (
    <View style={styles.screen}>
      <Text>Details 🍅🍆🍇🍉</Text>
      <Button title={'Go back to categories 👈✌'} onPress={() => popToTop()} />
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

export default MealDetailScreen;
