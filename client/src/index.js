import React from 'react';
import "antd/dist/reset.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
// import stockData from './components/stockData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    {/* <stockData />
     */}
  </React.StrictMode>
);

reportWebVitals();
