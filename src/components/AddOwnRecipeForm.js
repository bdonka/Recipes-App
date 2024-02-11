import React, { useState } from "react";

const AddOwnRecipeForm = ({ onRecipeAdd }) => {
  const [recipeData, setRecipeData] = useState({
    label: '',
    ingredients: [],
    image: '',
  });

  const [ingredientInput, setIngredientInput] = useState({
    food: '',
    quantity: '',
    measure: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData(prevState => ({
      ...prevState, [name]: value
    }));
  }

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setIngredientInput(prevState => ({
      ...prevState, [name]: value
    }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setRecipeData(prevState => ({
          ...prevState, image: reader.result
        }));
      };
    } else {
      console.error('Invalid file');
    }
  }

  const addIngredient = () => {
    setRecipeData(prevState => ({
      ...prevState, ingredients: [...prevState.ingredients, ingredientInput]
    }));
    setIngredientInput({
      food: '',
      quantity: '',
      measure: '',
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wysłano formularz:', recipeData);
    onRecipeAdd(recipeData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
        <input type="text" name="label" value={recipeData.label} onChange={handleChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        {recipeData.image && (
          <img src={recipeData.image} alt="Recipe" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        )}
      </div>
      <div>
        <label>Ingredients:</label>
        <div>
          <input type="text" name="food" value={ingredientInput.food} placeholder="Ingredient" onChange={handleIngredientChange} />
          <input type="text" name="quantity" value={ingredientInput.quantity} placeholder="Quantity" onChange={handleIngredientChange} />
          <input type="text" name="measure" value={ingredientInput.measure} placeholder="Measure" onChange={handleIngredientChange} />
          <button type="button" onClick={addIngredient}>Add more ingredients</button>
        </div>
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.food} - {ingredient.quantity} {ingredient.measure}</li>
          ))}
        </ul>
      </div>
      <button type="submit">Add your own recipe</button>
    </form>
  )
}

export default AddOwnRecipeForm;