import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Calculator/App';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className="root-element">
    <App/>
  </React.StrictMode>
);

reportWebVitals();
