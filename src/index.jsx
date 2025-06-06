import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
// import { Provider } from '/components/ui/provider';
import { Provider } from './components/ui/provider';

import App from './components/App/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>
);
