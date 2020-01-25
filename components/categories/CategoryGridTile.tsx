// @ts-nocheck
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export const CategoryGridTile = ({ item, navigationHandler }) => {
  let TouchableComponent = TouchableOpacity;

  const { OS, Version } = Platform;
  if (OS === 'android' && Version >= 21) TouchableComponent = TouchableNativeFeedback;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={styles.gridItemTouch} onPress={() => navigationHandler(item.id)}>
        <View style={styles.gridBackground(item.color)}>
          <Text style={styles.gridTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItemTouch: {
    flex: 1,
  },
  gridBackground: (color: string): any => ({
    flex: 1,
    backgroundColor: color,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }),
  gridTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
