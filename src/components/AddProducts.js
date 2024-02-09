import React from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import { useBuyListContext } from '../data/PassData';

const AddProducts = () => {
  const { newProducts, onInputChange } = useBuyListContext();

  const handleAddProduct = (productName, productQuantity) => {
    const cleanedInputProductName = productName.trim().toLowerCase();
    const existingProductIndex = newProducts.findIndex(
      (product) => product.food === cleanedInputProductName
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...newProducts];
      updatedProducts[existingProductIndex].quantity += parseInt(productQuantity);
      onInputChange(updatedProducts);
    } else {
      const newProduct = { food: cleanedInputProductName, quantity: parseInt(productQuantity) };
      const updatedProducts = [...newProducts, newProduct];
      onInputChange(updatedProducts);
    }
  };

  const handleIncrement = (index) => {
    const updatedProducts = [...newProducts];
    if (updatedProducts[index]) {
      updatedProducts[index].quantity += 1;
    }
    onInputChange(updatedProducts);
  };

  const handleDecrement = (index) => {
    const updatedProducts = [...newProducts];
    if (updatedProducts[index]) {
      updatedProducts[index].quantity = Math.max(updatedProducts[index].quantity - 1, 0);
    }
    onInputChange(updatedProducts);
    return updatedProducts;
  };

  const handleRemove = (index) => {
    const updatedProducts = [...newProducts];
    updatedProducts.splice(index, 1);
    onInputChange(updatedProducts);
  };

  const handleRemoveAll = () => {
    onInputChange([]);
  };

  const handleInputChange = (index, e) => {
    const { value } = e.target;
    const updatedProducts = newProducts.map((product, i) => {
      if (i === index) {
        return { ...product, quantity: parseInt(value) };
      }
      return product;
    });
    onInputChange(updatedProducts);
  };

  return (
    <div className="add-products">
      <AddProductForm onAddProduct={handleAddProduct} />
      <div className="btn-container">
        <button className="add-products-remove-all-btn" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
      <ProductList
        newProducts={newProducts}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default AddProducts;