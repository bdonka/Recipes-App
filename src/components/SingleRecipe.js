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
    <div className="single-recipe">
      <div className="single-recipe-image-container">
        <h2 className="single-recipe-title">{recipe.strMeal}</h2>
        <figure >
          <img className="single-recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
        </figure>
        <p className="single-recipe-description">{recipe.strInstructions}</p>
      </div>

      <div className="single-recipe-text-container">
        <h3 className="single-recipe-ingredients">Ingredients:</h3>
        <ul className="single-recipe-list">
          {ingredients.map((ingredient, index) => (
            <li className="single-recipe-item" key={index}>{ingredient}</li>
          ))}
        </ul>
        <button className="btn single-recipe-button" onClick={handleAddToBuyList}>Add to Buy List</button>
      </div>
    </div>
  )
}


export default SingleRecipe;