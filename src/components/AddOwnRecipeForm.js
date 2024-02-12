import React, { useState } from "react";
import { useBuyListContext } from "../data/PassData";

const AddOwnRecipeForm = () => {
  const buyListContext = useBuyListContext();
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
    console.log('Wysłano formularz:', recipeData, ingredientInput);
    buyListContext.addRecipe(recipeData, ingredientInput);
  }

  return (
    <form className="own-recipe__form" onSubmit={handleSubmit}>
      <div className="own-recipe__recipe-container">
        <div className="own-recipe__name-container">
          <label className="own-recipe__name-label">Recipe Name:</label>
          <input className="own-recipe__name-input" type="text" name="label" value={recipeData.label} onChange={handleChange} />
        </div>
        <div className="own-recipe__image-container">
          <label className="own-recipe__image-label">Image:</label>
          <input className="own-recipe__image-input" type="file" name="image" accept="image/*" onChange={handleImageChange} />
          {recipeData.image && (
            <img src={recipeData.image} alt="Recipe" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )}
        </div>
      </div>
      <div className="own-recipe__ingredients-label-container">
        <label className="own-recipe-ingredients">Ingredients:</label>
        <div className="own-recipe__ingredient-data-container">
          <input className="own-recipe__ingredient-name" type="text" name="food" value={ingredientInput.food} placeholder="Ingredient" onChange={handleIngredientChange} />
          <input className="own-recipe__ingredient-quantity" type="text" name="quantity" value={ingredientInput.quantity} placeholder="Quantity" onChange={handleIngredientChange} />
          <input className="own-recipe__ingredient-measure" type="text" name="measure" value={ingredientInput.measure} placeholder="Measure" onChange={handleIngredientChange} />
          <button className="own-recipe__add-ingredient-btn" type="button" onClick={addIngredient}>Add more ingredients</button>
        </div>
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.food} - {ingredient.quantity} {ingredient.measure}</li>
          ))}
        </ul>
      </div>
      <button className="own-recipe__add-recipe-btn" type="submit">Add your own recipe</button>
    </form>
  )
}

export default AddOwnRecipeForm;