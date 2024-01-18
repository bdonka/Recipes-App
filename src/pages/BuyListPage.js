import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavToRecipes from '../navigations/NavToRecipes';
import AddProducts from '../components/AddProducts';

const BuyListPage = () => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const addIngredientToBuyList = (ingredient) => {
    setIngredientsData((prevIngredients) => [...prevIngredients, ingredient]);
  };
  return (
    <div>
      <h1>Buy List</h1>
      <AddProducts ingredients={ingredientsData} addIngredients={addIngredientToBuyList} />
      <NavToRecipes />
      <Outlet />
    </div>
  )
}

export default BuyListPage;