export interface IMeals {
  meals: {
    meals?: IMeal[];
    filteredMeals?: IMeal[];
    favoriteMeals?: IMeal[];
  };
}

export interface IMeal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  duration: number;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}
