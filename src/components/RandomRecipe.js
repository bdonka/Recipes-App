import React, { useState, useEffect } from 'react';
import { getIngredientsList } from './Utils';

const RandomRecipe = ({ recipes }) => {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    const getRandomRecipe = () => {
      if (!recipes || recipes.length === 0) {
        return null;
      }
      const randomIndex = Math.floor(Math.random() * recipes.length);
      return recipes[randomIndex];
    };

    setRandomRecipe(getRandomRecipe());
  }, [recipes]);

  if (!randomRecipe || Object.keys(randomRecipe).length === 0) {
    return <p>No recipes available.</p>
  }
  const { strMeal, strInstructions, strMealThumb } = randomRecipe;

  return (
    <div className="random-recipe">
      <div className="random-recipe-image-container">
        <figure className="random-recipe-figure">
          <img className="random-recipe-image" src={strMealThumb} alt={strMeal} />
        </figure>
      </div>
      <div className="random-recipe-text-container">
        <h2 className="random-recipe-title">{strMeal}</h2>
        <p className="random-recipe-description">{strInstructions}</p>

        <h3 className="random-recipe-ingredients-title">Ingredients:</h3>
        <ul className="random-recipe-list">
          {getIngredientsList(randomRecipe).map((ingredient, index) => (
            <li className="random-recipe-item" key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default RandomRecipe;
