import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WelcomePage from './pages/WelcomePage.js';
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';
import { BuyListProvider } from './data/PassData.js';
import RecipesPage from './pages/RecipesPage';
import BuyListPage from './pages/BuyListPage.js';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BuyListProvider>
      <WelcomePage />
      <RecipesPage />
      <BuyListPage />
    </BuyListProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
