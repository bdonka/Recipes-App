import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RecipesPage from './pages/RecipesPage';
import BuyListPage from './pages/BuyListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/recipes/*" element={<RecipesPage />} />
        <Route path="/buy-list" element={<BuyListPage />} />
      </Routes>
    </Router>
  );
};

export default App;