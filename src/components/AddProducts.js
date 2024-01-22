import React, { useState, useEffect } from 'react';
import { useBuyListContext } from '../data/PassData';

const AddProducts = () => {
  const { newProducts, addIngredients, clearIngredients } = useBuyListContext();
  const [inputProduct, setInputProduct] = useState('');
  const [inputQuantity, setInputQuantity] = useState('');

  useEffect(() => {
    console.log('Updated newProducts:', newProducts);
  }, [newProducts]);

  const handleProductChange = (e) => setInputProduct(e.target.value);
  const handleQuantityChange = (e) => setInputQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputProduct && inputQuantity) {
      const cleanedInputProductName = inputProduct.trim().toLowerCase();

      const existingProductIndex = newProducts.findIndex(
        (product) => {
          const cleanedExistingProductName = product.split(' - ')[0].trim().toLowerCase();
          return cleanedExistingProductName === cleanedInputProductName;
        }
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...newProducts];
        const [existingProductName, existingProductQuantity] = updatedProducts[existingProductIndex].split(' - ');
        const newQuantity = parseInt(existingProductQuantity) + parseInt(inputQuantity);
        updatedProducts[existingProductIndex] = `${existingProductName} - ${newQuantity}`;
        addIngredients(updatedProducts);
      } else {
        const existingProduct = newProducts.find(
          (product) => {
            const cleanedProductName = product.split(' - ')[0].trim().toLowerCase();
            return cleanedProductName === cleanedInputProductName;
          }
        );

        if (existingProduct) {
          const [existingProductName, existingProductQuantity] = existingProduct.split(' - ');
          const newQuantity = parseInt(existingProductQuantity) + parseInt(inputQuantity);
          const updatedProducts = newProducts.map((product) =>
            product.split(' - ')[0].trim().toLowerCase() === cleanedInputProductName
              ? `${existingProductName} - ${newQuantity}`
              : product
          );
          addIngredients(updatedProducts);
        } else {
          const newProduct = `${inputProduct} - ${inputQuantity}`;
          addIngredients([...newProducts, newProduct]);
        }
      }

      setInputProduct('');
      setInputQuantity('');
    }
  };

  const handleRemove = (index) => {
    console.log('Removing product at index:', index);
  };

  const handleRemoveAll = () => {
    console.log('Removing all products');
    clearIngredients();
  }


  return (
    <div className="add-products">
      <form>
        <input className="add-products-product-name" type="text" placeholder="Product" value={inputProduct} onChange={handleProductChange} />
        <input className="add-products-product-quality" type="text" placeholder="Quantity" value={inputQuantity} onChange={handleQuantityChange} />
      </form>
      <div className="btn-container">
        <button className="add-products-add-btn" onClick={handleSubmit}>Add Product</button>
        <button className="add-products-remove-all-btn" onClick={handleRemoveAll}>Remove All</button>
      </div>
      <ul className="add-products-list">
        {newProducts.map((product, index) => (
          <li className="add-products-item" key={index}>
            {product}
            <button className="add-products-remove-btn" onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddProducts;