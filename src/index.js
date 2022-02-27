import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipeProvider from './store/RecipeProvider';

ReactDOM.render(
  <React.StrictMode>
    <RecipeProvider>
     <App />
    </RecipeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

