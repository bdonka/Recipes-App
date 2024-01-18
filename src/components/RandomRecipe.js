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
    <div>
      <h2>Recipe</h2>
      <div>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <h3>{strMeal}</h3>
      <p>{strInstructions}</p>

      <h3>Ingredients:</h3>
      <ul>
        {getIngredientsList(randomRecipe).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
};

export default RandomRecipe;
