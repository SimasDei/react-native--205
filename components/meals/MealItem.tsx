import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export const MealItem = ({ onMealSelect, meal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => onMealSelect(meal.id)}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: meal.imageUrl }} style={styles.mealImage}>
              <View style={styles.mealTitleContainer}>
                <Text numberOfLines={1} style={styles.mealTitle}>
                  {meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.mealDetailText}>{meal.duration}m. ⏰</Text>
            <Text style={styles.mealDetailText}>{meal.complexity} ⚖</Text>
            <Text style={styles.mealDetailText}>{meal.affordability} 💲</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  mealTitleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  mealImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealDetailText: {
    textTransform: 'uppercase',
  },
});

export default MealItem;
