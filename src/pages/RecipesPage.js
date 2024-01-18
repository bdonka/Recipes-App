import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavToBuyList from '../navigations/NavToBuyList';
import RandomRecipe from '../components/RandomRecipe';
import SliderRecipes from '../components/SliderRecipes';
import RecipeList from '../components/RecipeList';
import { fetchRecipeData } from '../data/GetApiData';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedRecipes, setAddedRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetchRecipeData();
        if (response && response.meals) {
          setRecipes(response.meals);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRecipeClick = (recipe) => {
    console.log('Recipe clicked:', recipe);

  };

  const handleClearAddedRecipes = () => {
    setAddedRecipes([]);
    alert('All added recipes cleared!');
  };

  return (
    <div>
      <h1>Recipes</h1>
      <Outlet />
      <NavToBuyList />
      <RandomRecipe recipes={recipes} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={handleClearAddedRecipes}>Clear Added Recipes</button>
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </div>
      )}
      <SliderRecipes recipes={recipes} />
    </div>
  );
}

export default RecipesPage;
