import React from 'react';
import { useBuyListContext } from '../data/PassData';

const SingleRecipe = ({ recipe }) => {
  const { addIngredients } = useBuyListContext();
  if (!recipe) {
    return <div>Loading...</div>;
  }

  const handleAddToBuyList = () => {
    addIngredients(recipe.ingredients);
    alert('Ingredients added to Buy List!');
  };

  return (
    <div className="single-recipe">
      <div className="single-recipe-image-container">
        <h2 className="single-recipe-title">{recipe.label}</h2>
        <figure >
          <img className="single-recipe-image" src={recipe.image} alt={recipe.label} />
        </figure>
      </div>

      <div className="single-recipe-text-container">
        <h3 className="single-recipe-ingredients">Ingredients:</h3>
        <ul className="single-recipe-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li className="single-recipe-item" key={index}>
              {ingredient.quantity && ingredient.quantity > 0 ? `${ingredient.quantity}` : ''} {ingredient.measure !== '<unit>' ? ingredient.measure : ''} {ingredient.food}
            </li>
          ))}
        </ul>
        <button className="btn single-recipe-button" onClick={handleAddToBuyList}>Add to Buy List</button>
      </div>
    </div>
  )
}


export default SingleRecipe;