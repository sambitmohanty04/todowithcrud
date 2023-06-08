import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationProvider } from './context/NavigationContext';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
    </Provider>
  </React.StrictMode>
);

