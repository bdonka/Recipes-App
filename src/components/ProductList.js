import React from 'react';

const ProductList = ({ newProducts, onIncrement, onDecrement, onRemove, onInputChange }) => {
  const groupedProducts = {};
  newProducts.forEach(product => {
    if (product) {
      const { food, quantity, measure } = product;
      if (!groupedProducts[food]) {
        groupedProducts[food] = { ...product };
      } else groupedProducts[food].quantity += quantity;
    }
  });

  const groupedProductsArray = Object.values(groupedProducts);

  return (
    <ul className="add-products-list">
      {groupedProductsArray.map((product, index) => (
        <li className="add-products-item" key={index}>
          <div className="product-name-container">
            <p className="quantity-product-name">{product.food}</p>
          </div>
          <div className="quantity-container">
            <input
              className="quantity-value"
              value={product.quantity}
              onChange={(e) => onInputChange(index, e)}
            />
            {product.measure !== '<unit>' && (
              <p className="quantity-measure-value">{product.measure}</p>
            )}
            <button className="increase-quantity-button" onClick={() => onIncrement(index)}>
              +
            </button>
            <button className="decrease-quantity-button" onClick={() => onDecrement(index)}>
              -
            </button>
            <button className="add-products-remove-btn" onClick={() => onRemove(index)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
