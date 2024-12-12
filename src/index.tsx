import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Import Provider
import store from './redux/store/store'; // Import your configured Redux store
import App from './App';
import './index.css';  // Optional: Import global styles

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>   {/* Wrap App with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
