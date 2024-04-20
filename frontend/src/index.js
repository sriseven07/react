import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';
import './styles/page.css';
import './styles/subMenu.css';
import './styles/subForm.css'

import App from './App';

// context
import { ActivityContextProvider } from './context/ActivityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActivityContextProvider>
      <App />
    </ActivityContextProvider>
  </React.StrictMode>
);
