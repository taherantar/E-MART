import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contacts from './component/Contacts';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/contacts",
    element: <Contacts />
  },
  {
    path: "/about",
    element: <About />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

