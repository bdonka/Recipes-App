import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleProductChange = (e) => setProductName(e.target.value);
  const handleQuantityChange = (e) => setProductQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim() || !productQuantity.trim()) {
      alert('Please enter both product name and quantity.');
      return;
    }
    onAddProduct(productName, productQuantity);
    setProductName('');
    setProductQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="add-products-product-name"
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={handleProductChange}
      />
      <input
        className="add-products-product-quality"
        type="text"
        placeholder="Quantity"
        value={productQuantity}
        onChange={handleQuantityChange}
      />
      <button type="submit" className="add-products-add-btn">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
