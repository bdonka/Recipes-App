import React from 'react';

const ProductList = ({ newProducts, onIncrement, onDecrement, onRemove, onInputChange }) => {
  console.log('newProducts in ProductList:', newProducts);

  return (
    <ul className="add-products-list">
      {newProducts && newProducts.length > 0 && newProducts.map((product, index) => {
        if (!product) return null;
        const { food: productName, quantity, measure: productMeasure } = product;

        return (
          <li className="add-products-item" key={index}>
            {productName}
            <div className="quantity-container">
              <input
                value={quantity}
                onChange={(e) => onInputChange(index, e)}
              />
              {productMeasure !== '<unit>' && (
                <p>{productMeasure}</p>
              )}
              <button className="increase-quantity-button" onClick={() => onIncrement(index)}>
                +
              </button>
              <button className="decrease-quantity-button" onClick={() => onDecrement(index)}>
                -
              </button>
            </div>
            <button className="add-products-remove-btn" onClick={() => onRemove(index)}>
              Remove
            </button>
          </li>
        )
      })}
    </ul>
  );
};

export default ProductList;
