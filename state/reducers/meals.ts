import { MEALS } from '../../data';
import { MTypes, FTypes } from '../types';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MTypes.TOGGLE_FAVORITE:
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
    case FTypes.SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.vegan && !meal.isVegan) return false;
        return meal;
      });

      return {
        ...state,
        filteredMeals,
      };
    default:
      return state;
  }
};
