import React from 'react'
import NavToRecipes from '../navigations/NavToRecipes';
import NavToBuyList from '../navigations/NavToBuyList';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page-title">Welcome in Recipe App</h1>
      <NavToRecipes />
      <NavToBuyList />
    </div>
  )
}

export default WelcomePage;
