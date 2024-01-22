import { createContext, useContext, useState } from 'react';

const BuyListContext = createContext();

const BuyListProvider = ({ children }) => {
  const [newProducts, setNewProducts] = useState([]);

  const addIngredients = (ingredients) => {
    setNewProducts(ingredients);
    return ingredients;
  };

  const clearIngredients = () => {
    setNewProducts([]);
  };

  return (
    <BuyListContext.Provider
      value={{
        newProducts,
        addIngredients,
        clearIngredients,
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