export const getIngredientsList = (recipe) => {
  if (!recipe || !recipe.ingredients) {
    console.error('Invalid recipe data:', recipe);
    return [];
  }

  return recipe.ingredients.map(ingredient => {
    const measure = ingredient.measure !== '<unit>' ? ingredient.measure : '';
    return `${ingredient.quantity || ''} ${measure || ''} ${ingredient.food}`
  });
};