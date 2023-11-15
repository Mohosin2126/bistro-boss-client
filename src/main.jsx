import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home/Home';
import Menu from './Pages/Menu/Menu';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/menu",
        element:<Menu></Menu>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider> <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
   

  </React.StrictMode>,
)
