import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import NavToRecipes from '../navigations/NavToRecipes';
import RecipesPage from './RecipesPage';
import BuyListPage from './BuyListPage';
import NavToBuyList from '../navigations/NavToBuyList';

const WelcomePage = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Witaj na stronie Magic Kitchen!</h1>
                <Outlet />
                <NavToRecipes />
                <NavToBuyList />
              </div>} />
            <Route path="/recipes/*" element={<RecipesPage />} />
            <Route path="/buy-list" element={<BuyListPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default WelcomePage;
