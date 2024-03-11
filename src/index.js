import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bootstrap from 'bootstrap';
import Main from './pages/main'
import ProductsList from './pages/productsList';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Orders from './pages/orders';

const router = createBrowserRouter([
  {
    path :"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path:"/products",
        element: <ProductsList />
      },
      {
        path:"/orders",
        element: < Orders />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
