import React from 'react';
import ReactDOM from 'react-dom/client';

import Frontpage from './src/firstpage/Frontpage';
import Home from './src/home/home';
import SignupForm from './src/Form/Signup';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Header from './src/home/header';

import Login from './src/Form/Login';
import ProductForm from './src/CreateProduct';
import ProductSubmitted from './src/Product/Productsubmitted';
import Search from './src/Searchproduct.js/Search';
import DetailCard from './src/Product/DetailCard';
import OrderCard from './src/Order/CreateOrder';
import UsercontextProvider from './src/Context/Contextapi';
import Profile from './src/Form/Profile';
import RecivedOrder from './src/Order/RecivedOrder';
import ProductBY from './src/Product/ProductBY';
import ProdcutUpdate from './src/Product/ProdcutUpdate';
import App2 from './src/Chat-Bot/App2';
import NewLunch from './src/NewLunchandSale/NewLunch';
import Sale from './src/NewLunchandSale/Sale';
export default function App() {


  return (
    <UsercontextProvider>
    <div className='bg-hero bg-slate-200'>
    <Header/>
    <Outlet/>
    </div>
    </UsercontextProvider>
  )
}
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Frontpage/>
      },
      {
        path:"/home",
        element:<Home/>,
        
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignupForm/>
      },
      {
        path:'/createProduct',
        element:<ProductForm/>
      },
      {
        path:'/product/submitted',
        element:<ProductSubmitted/>
      },
      {
        path:'/search/:keyword',
        element:<Search/>
      },
      {
        path:'/product/:id',
        element:<DetailCard/>
      },
      {
        path:'/order/:productid',
        element:<OrderCard/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/recived/order',
        element:<RecivedOrder/>
      },
      {
        path:'/YourProducts',
        element:<ProductBY/>
      },
      {
        path:'/Update/:Productid',
        element:<ProdcutUpdate/>
      },
      {
        path:'/Chat-support',
        element:<App2/>
      },
      {
        path:'/NewLaunch',
        element:<NewLunch/>
      },
      {
        path:'/Sale',
        element:<Sale/>
      }
    ]
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
