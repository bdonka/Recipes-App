import React, { useState } from 'react';
import ModalRecipe from './ModalRecipe'
import { getIngredientsList } from './Utils';

const RecipeList = ({ recipes }) => {
  const [ingredientFilter, setIngredientFilter] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addToBuyList = (ingredients) => {
    console.log('Adding to Buy List:', ingredients);
  }

  const handleFilterChange = (e) => {
    setIngredientFilter(e.target.value);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const filteredRecipes = recipes ? recipes.filter((recipe) => {
    const ingredientsArray = getIngredientsList(recipe);

    return ingredientsArray.some((ingredient) =>
      ingredient.toLowerCase().includes(ingredientFilter.toLowerCase())
    );
  }) : [];
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by ingredient"
        value={ingredientFilter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.idMeal} onClick={() => handleRecipeClick(recipe)}>
            <div>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{ maxWidth: '100px', marginRight: '10px' }}
              />
              <span>{recipe.strMeal}</span>
            </div>
          </li>
        ))}
      </ul>
      {selectedRecipe && <ModalRecipe selectedRecipe={selectedRecipe} addToBuyList={addToBuyList} />}
    </div>
  );
};

export default RecipeList;