import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountContextProvider } from './contexts/CountContext';

import './styles/global-styles.css';

import { Home } from './templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountContextProvider>
      <Home />
    </CountContextProvider>
  </React.StrictMode>,
);
