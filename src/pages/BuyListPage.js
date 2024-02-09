import React, { useState } from 'react';
import NavToRecipes from '../navigations/NavToRecipes';
import AddProducts from '../components/AddProducts';

const BuyListPage = () => {
  const [ingredientsData, setIngredientsData] = useState([]);

  const addIngredientToBuyList = (ingredient) => {
    setIngredientsData((prevIngredients) => [...prevIngredients, ingredient]);
  };



  return (
    <div className="buylist-page">
      <h1 className="buylist-page">Buy List</h1>
      <NavToRecipes />
      <AddProducts ingredients={ingredientsData} addIngredients={addIngredientToBuyList} />
    </div>
  )
}

export default BuyListPage;