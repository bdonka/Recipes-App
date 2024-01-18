import React, { useState } from 'react';

const AddProducts = ({ ingredients, addIngredients }) => {
  const [newProducts, setNewProducts] = useState([]);
  const [inputProduct, setInputProduct] = useState('');
  const [inputQuantity, setInputQuantity] = useState('');

  const handleProductChange = (e) => setInputProduct(e.target.value);
  const handleQuantityChange = (e) => setInputQuantity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputProduct && inputQuantity) {
      const newProduct = `${inputProduct} - ${inputQuantity} `;
      setNewProducts((prevProducts) => [...prevProducts, newProduct]);

      ingredients && ingredients.push(newProduct);
      addIngredients(newProduct);
      setInputProduct('');
      setInputQuantity('');
    }
  }

  console.log('newProducts:', newProducts);

  const handleRemove = (index) => {
    const updatedProducts = [...newProducts];
    updatedProducts.splice(index, 1);
    setNewProducts(updatedProducts);
  }

  const handleRemoveAll = () => {
    setNewProducts([]);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Product" value={inputProduct} onChange={handleProductChange} />
        <input type="text" placeholder="Quantity" value={inputQuantity} onChange={handleQuantityChange} />
        <button onClick={handleSubmit}>Add Product</button>
        <button onClick={handleRemoveAll}>Remove All</button>
      </form>
      <ul>
        {newProducts.map((newProduct, index) => (
          <li key={index}>{newProduct}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddProducts;