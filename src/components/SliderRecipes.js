import React, { useState, useEffect } from 'react';
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

  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <Slider {...settings} className="slider-recipes">
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
      </Slider>
      {selectedRecipe && <ModalRecipe selectedRecipe={selectedRecipe} />}
    </>
  );
};

export default SliderRecipes;