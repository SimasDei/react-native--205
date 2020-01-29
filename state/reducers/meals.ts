import { MEALS } from '../../data';
import { MTypes } from '../types';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MTypes.TOGGLE_FAVORITE:
    case MTypes.TOGGLE_FAVORITE_ASYNC:
      const isFavorite = state.favoriteMeals.findIndex(item => item.id === action.id);
      if (isFavorite >= 0) {
        const favoriteMeals = [...state.favoriteMeals];
        favoriteMeals.splice(isFavorite, 1);
        return {
          ...state,
          favoriteMeals,
        };
      } else {
        const mealToAdd = state.meals.find(meal => meal.id === action.id);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(mealToAdd),
        };
      }
    default:
      return state;
  }
};
