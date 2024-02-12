import { createContext, useContext, useState } from 'react';

const BuyListContext = createContext();

const BuyListProvider = ({ children }) => {
  const [newProducts, setNewProducts] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);

  const addIngredients = (ingredients) => {
    setNewProducts((prev) => ([...prev, ...ingredients]));
  };

  const clearIngredients = () => {
    setNewProducts([]);
  };

  const onInputChange = (products) => {
    setNewProducts(products);
  };

  const addRecipe = (recipe, ingredients) => {
    setAllRecipes((prevRecipes) => [...prevRecipes, { ...recipe, ingredients: [ingredients] }]);
  }

  console.log('allRecipes:', allRecipes)

  return (
    <BuyListContext.Provider
      value={{
        newProducts,
        addIngredients,
        clearIngredients,
        onInputChange,
        allRecipes,
        addRecipe
      }}
    >
      {children}
    </BuyListContext.Provider>
  );
};

const useBuyListContext = () => {
  const context = useContext(BuyListContext);
  if (!context) {
    throw new Error('useBuyListContext must be used within a PassDataProvider');
  }
  return context;
};

export { useBuyListContext, BuyListProvider };