import React, { useState } from 'react';
import Slider from 'react-slick';
import ModalRecipe from './ModalRecipe';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const SliderRecipes = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <Slider {...settings}>
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.idMeal} onClick={() => handleRecipeClick(recipe)}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              title={recipe.strMeal}
              data-imageurl={recipe.strMealThumb}
            />
            <h3>{recipe.strMeal}</h3>
          </div>
        ))}
      {selectedRecipe && <ModalRecipe selectedRecipe={selectedRecipe} />}
    </Slider>
  );
};

export default SliderRecipes;