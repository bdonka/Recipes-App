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
    <>
      <div className="recipes-list-container">
        <input
          className="recipes-list-filter"
          type="text"
          placeholder="Filter by ingredient"
          value={ingredientFilter}
          onChange={handleFilterChange}
        />
        <ul className="recipes-list-list">
          {filteredRecipes.map((recipe) => (
            <li className="recipes-list-item" key={recipe.idMeal} onClick={() => handleRecipeClick(recipe)}>
              <div className="recipes-list-item-container">
                <figure>
                  <img
                    className="recipes-list-image"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    style={{ maxWidth: '100px', marginRight: '10px' }}
                  />
                </figure>
                <span className="recipes-list-title">{recipe.strMeal}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedRecipe && <ModalRecipe selectedRecipe={selectedRecipe} addToBuyList={addToBuyList} />}
    </>
  );
};

export default RecipeList;