import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';
import App from './App.js'
import { BuyListProvider } from './data/PassData.js';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <BuyListProvider>
      <App />
    </BuyListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
