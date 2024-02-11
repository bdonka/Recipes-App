import React, { useState, useEffect } from 'react';
import NavToBuyList from '../navigations/NavToBuyList';
import RandomRecipe from '../components/RandomRecipe';
import SliderRecipes from '../components/SliderRecipes';
import RecipeList from '../components/RecipeList';
import OwnRecipeButton from '../components/OwnRecipeButton';
import { fetchRecipeData } from '../data/GetApiData';

const RecipesPage = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetchRecipeData();
        if (response && response.hits) {
          const recipesData = response.hits.map(hit => hit.recipe);
          setRecipes(recipesData);
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (err) {
        console.error('Error fetching recipes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  const handleRecipeClick = (recipe) => {
    console.log('Recipe clicked:', recipe);
  };

  return (
    <div className="recipes-page">
      <h1 className="recipes-page-title">Recipes</h1>
      <NavToBuyList />
      <OwnRecipeButton />
      <RandomRecipe recipes={recipes} />
      <SliderRecipes recipes={recipes} />
      {loading ? (
        <p className="recipes-page-loading">Loading...</p>
      ) : (
        <div className="recipes-list">
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </div>
      )}
    </div>
  );
}

export default RecipesPage;
