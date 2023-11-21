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
import Order from './Pages/Order/Order/Order';
import Login from './Login/Login';
import AuthProvider from './Provider/AuthProvider';
import SignUp from './SignUp/SignUp';
import Secret from './Pages/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DashBoard from './Layout/DashBoard';
import Cart from './Pages/DashBoard/Cart/Cart';
import AllUsers from './Pages/DashBoard/AllUsers/AllUsers';
import AddItems from './Pages/DashBoard/AddItems/AddItems';
import AdminRoute from './Pages/DashBoard/AdminRoute/AdminRoute';
import ManageItems from './Pages/DashBoard/ManageItems/ManageItems';

const queryClient = new QueryClient();


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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: <PrivateRoute> <Secret></Secret></PrivateRoute>

      }
    ]
  },
  {
    path:"/dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>    ,
   children:[
{
  path:"/dashboard/cart",
  element:<Cart></Cart>,
},
// admin routes 
{
  path:"/dashboard/users",
  element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
},
{
  path:"/dashboard/addItems",
  element: <AdminRoute><AddItems></AddItems></AdminRoute>,
},
{
  path:"/dashboard/manageItems",
  element: <AdminRoute><ManageItems></ManageItems></AdminRoute>    
}
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>

  </React.StrictMode>,
)
