import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import { Store } from './redux/Store';
import './index.css';
import App from './App';





ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>

  </React.StrictMode>

);

