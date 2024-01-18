export const getIngredientsList = (recipe) => {
  if (!recipe || !recipe.idMeal || !recipe.strMeal) {
    console.error('Invalid recipe data:', recipe);
    return [];
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
      ingredients.push(`${ingredient} - ${measure}`);
    } else {
      break;
    }
  };
  return ingredients;
};