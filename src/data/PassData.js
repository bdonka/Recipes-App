import React, { createContext, useContext, useState } from 'react';

const BuyListContext = createContext();

export const BuyListProvider = ({ children }) => {
  const [newProducts, setNewProducts] = useState([]);

  const addIngredients = (ingredients) => {
    setNewProducts((prevProducts) => [...prevProducts, ...ingredients])
  };

  return (
    <BuyListContext.Provider value={{ newProducts, addIngredients }}>
      {children}
    </BuyListContext.Provider>
  )
}

export const useBuyListContext = () => {
  return useContext(BuyListContext);
}