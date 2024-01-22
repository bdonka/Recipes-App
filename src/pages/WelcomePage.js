import React from 'react'
import NavToRecipes from '../navigations/NavToRecipes';
import NavToBuyList from '../navigations/NavToBuyList';

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome in Recipe App</h1>
      <NavToRecipes />
      <NavToBuyList />
    </div>
  )
}

export default WelcomePage;
