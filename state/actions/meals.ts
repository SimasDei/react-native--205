import { MTypes } from '../types';

export const toggleFavorite = id => {
  return { type: MTypes.TOGGLE_FAVORITE, id };
};

export const mealActions = {
  toggleFavorite,
};
