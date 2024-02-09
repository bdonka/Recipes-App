import React, { useState, useCallback } from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import { useBuyListContext } from '../data/PassData';

const AddProducts = () => {
  const { newProducts, onInputChange } = useBuyListContext();
  const [products, setProducts] = useState(newProducts);

  const handleAddProduct = useCallback((productName, productQuantity) => {
    setProducts(prevProducts => {
      const cleanedInputProductName = productName.trim().toLowerCase();
      const existingProductIndex = prevProducts.findIndex(
        (product) => product.food === cleanedInputProductName
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex].quantity += parseInt(productQuantity);
        onInputChange(updatedProducts);
        return updatedProducts;
      } else {
        const newProduct = { food: cleanedInputProductName, quantity: parseInt(productQuantity) };
        const updatedProducts = [...prevProducts, newProduct];
        onInputChange(updatedProducts);
        return updatedProducts;
      }
    });
  }, [onInputChange]);

  const handleIncrement = useCallback((index) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index]) {
        updatedProducts[index].quantity += 1;
      }
      onInputChange(updatedProducts);
      return updatedProducts;
    });
  }, [onInputChange]);

  const handleDecrement = useCallback((index) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index]) {
        updatedProducts[index].quantity = Math.max(updatedProducts[index].quantity - 1, 0);
      }
      onInputChange(updatedProducts);
      return updatedProducts;
    });
  }, [onInputChange]);

  const handleRemove = useCallback((index) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts.splice(index, 1);
      onInputChange(updatedProducts);
      return updatedProducts;
    });
  }, [onInputChange]);

  const handleRemoveAll = useCallback(() => {
    setProducts([]);
    onInputChange([]);
  }, [onInputChange]);

  const handleInputChange = useCallback((index, e) => {
    const { value } = e.target;
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.map((product, i) => {
        if (i === index) {
          return { ...product, quantity: parseInt(value) };
        }
        return product;
      });
      onInputChange(updatedProducts);
      return updatedProducts;
    });
  }, [onInputChange]);

  return (
    <div className="add-products">
      <AddProductForm onAddProduct={handleAddProduct} />
      <div className="btn-container">
        <button className="add-products-remove-all-btn" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
      <ProductList
        newProducts={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default AddProducts;
