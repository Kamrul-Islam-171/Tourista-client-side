import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainRoutes from './Routes/MainRoutes';
import Home from './Pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import Register from './Pages/Register/Register';
import AddTouristSpot from './Pages/AddTouristSpot/AddTouristSpot';
import AllSpots from './Pages/AllSpots/AllSpots';
import SpotDetails from './Pages/SpotDetails/SpotDetails';
import PrivateRoute from './Utilities/PrivateRoute/PrivateRouts';
import MyLists from './Pages/MyLists/MyLists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        
      },
      {
        path:'/allSpots',
        element:<AllSpots></AllSpots>,
        loader: () => fetch('http://localhost:5000/allTouristSpots')
        
      },
      {
        path:'/spot/:id',
        element : <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>
      },
      {
        path:'/myLists',
        element:<MyLists></MyLists>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
