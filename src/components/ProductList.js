import React from 'react';

const ProductList = ({ newProducts, onIncrement, onDecrement, onRemove, onInputChange }) => {
  console.log('newProducts in ProductList:', newProducts);

  const groupedProducts = {};
  newProducts.forEach(product => {
    if (product) {
      if (!groupedProducts[product.food]) {
        groupedProducts[product.food] = { ...product };
      } else groupedProducts[product.food].quantity += product.quantity;
    }
  })

  return (
    <ul className="add-products-list">
      {newProducts && newProducts.length > 0 && newProducts.map((product, index) => {
        if (!product) return null;
        const { food: productName, quantity, measure: productMeasure } = product;

        return (
          <li className="add-products-item" key={index}>
            <div className="product-name-container">
              <p className="quantity-product-name">{productName}</p>
            </div>
            <div className="quantity-container">
              <input
                className="quantity-value"
                value={quantity}
                onChange={(e) => onInputChange(index, e)}
              />
              {productMeasure !== '<unit>' && (
                <p className="quantity-measure-value">{productMeasure}</p>
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
        )
      })}
    </ul>
  );
};

export default ProductList;
