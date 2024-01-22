import React from 'react';
import { getIngredientsList } from './Utils';
import { useBuyListContext } from '../data/PassData';

const SingleRecipe = ({ recipe }) => {
  const { addIngredients } = useBuyListContext();
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const ingredients = getIngredientsList(recipe);

  const handleAddToBuyList = () => {
    addIngredients(ingredients);
    alert('Ingredients added to Buy List!');
  };

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <div>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <p>{recipe.strInstructions}</p>

      <h3>Ingredients:</h3>
      <button onClick={handleAddToBuyList}>Add to Buy List</button>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}


export default SingleRecipe;