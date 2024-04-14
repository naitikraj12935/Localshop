import React from 'react';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from '../Context/Contextapi';
import axios from 'axios';
import { UrlLink } from '../Config';
import { useNavigate } from 'react-router-dom';

export default function LinkComponent() {
  const [mobileview,setmobileview]=useState(window.innerWidth<=1000)
  const {user,setuser}=useContext(Usercontext);
  const navigate=useNavigate();
  const data={
    _id:'',
    name:'',
    email:'',
    mobileNumber:'',
    
    deliveryAddress:'',
    
    

}
  useEffect(()=>{
    const handlesize=()=>{
     setmobileview(window.innerWidth<=1000);
    }
    window.addEventListener('resize',handlesize);
    return(
     window.addEventListener('resize',handlesize)
    )
 },[])
 const Logout=async ()=>{
  try{
    const response = await axios.get(`${UrlLink}/logout`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
  })
    if(response.status==200)
    {
        setuser(data);
        navigate('/home')
    }
}
  catch(error)
  {
     console.log(error)
  }
 }
  return (
    <div>
    {
        !mobileview? (
            <table className='border border-solid border-slate-500 m-4 bg-blue-500 text-white z-40'>
        <tbody>
          <tr>
          <Link to='/profile'>
            <td className='border border-solid border-slate-500 flex items-center justify-center hover:bg-sky-300 py-2 px-8 '>
               {user.name!=='' ? user.name :'profile'}
            </td>
          </Link>
          </tr>
          <tr>
            <td className='border border-solid border-slate-500 flex items-center justify-center hover:bg-sky-300 lg:py-2 px-8 '>
              Wishlist
            </td>
          </tr>
          <tr>
          <Link to='/order/userOrder'>
            <td className='border border-solid border-slate-500 flex items-center justify-center hover:bg-sky-300 lg:py-2 px-8 '>
            Your Orders
            </td>
            </Link>
          </tr>
          <tr>
          <Link to='/recived/order'>
            <td className='border border-solid border-slate-500 flex items-center justify-center hover:bg-sky-300 lg:py-2 px-8 '>
            Recieved Order
            </td>
            </Link>
          </tr>
          <tr>
          <Link to='/YourProducts'>
            <td className='border border-solid border-slate-500 flex items-center justify-center hover:bg-sky-300 lg:py-2 px-8 '>
            YOUR PRODUCT
            </td>
            </Link>
          </tr>
          
          <tr>
            <td className='border border-solid border-slate-500 flex items-center hover:bg-sky-300 justify-center lg:py-2 px-8 '>
              Notification
            </td>
          </tr>
          <tr>
          
            {
              user.name===''?(
                <Link to="/login">
                <td className='border border-solid border-slate-500 flex items-center hover:bg-sky-300 justify-center lg:py-2 px-8 '>
                 Login
                </td>
                </Link>
              ):(
               
                <td className='border border-solid border-slate-500 flex items-center hover:bg-sky-300 justify-center lg:py-2 px-8 ' onClick={Logout}>
                Logout
                </td>
               
              )
            }
           
            </tr>
            <tr>
            <Link to="/createProduct">
            <td className='border border-solid border-slate-500 flex items-center hover:bg-sky-300 justify-center lg:py-2 px-8 '>
              create Product
            </td>
            </Link>
          </tr>
          <tr>
          <Link to="/Chat-support">
            <td className='border border-solid border-slate-500 flex items-center hover:bg-sky-300 justify-center lg:py-2 px-8 '>
             Contact
            </td>
            </Link>
          </tr>
        </tbody>
      </table>

        )
        :(
            <table className='border-none  bg-blue-500  opacity-90 mr-1 mt-2 z-40 text-slate-200'>
        <tbody>
          <tr>
          <Link to='/profile'>
          <td className='border border-solid border-slate-500 flex hover:bg-red-300 items-center justify-center px-16 py-4 '>
            {user.name!=='' ? user.name :'profile'}
            </td>
          </Link>
          </tr>
          <tr>
          <Link to="/NewLaunch">
            <td className='border border-solid border-slate-500 hover:bg-red-200 flex items-center justify-center px-16 py-4'>
              New Lunch
            </td>
            </Link>
            </tr>
            <tr>
            <Link to="/Sale">
            <td className='border border-solid border-slate-500 hover:bg-red-200 flex items-center justify-center px-16 py-4 '>
              Sale
            </td>
            </Link>
            </tr>
            <tr>
            <Link to='/home'>
            <td className='border border-solid border-slate-500 hover:bg-red-200  flex items-center justify-center px-16 py-4 '>
              Home
            </td>
            </Link>
          </tr>
          <tr>
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 '>
              Wishlist
            </td>
          </tr>
          <tr>
          <Link to='/order/userOrder'>
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 '>
              Your Orders
            </td>
            </Link>
          </tr>
          <tr>
          <Link to='/recived/order'>
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 '>
            Recieved Order
            </td>
            </Link>
          </tr>
          <tr>
          <Link to='/YourProducts'>
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 '>
            YOUR PRODUCT
            </td>
            </Link>
          </tr>
          <tr>
            <td className='border border-solid border-slate-500 flex  hover:bg-red-200 items-center justify-center px-16 py-4 '>
              Notification
            </td>
          </tr>
          <tr>
         
            {
              user.name===''?(
                <Link to="/login">
                <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 '>
                 Login
                </td>
                </Link>
              ):(
               
                <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4 ' onClick={Logout}>
                Logout
                </td>
              
              )
            }

          </tr>
          <tr>
          <Link to="/createProduct">
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4'>
              Create Product
            </td>
            </Link>
            
          </tr>
          <tr>
          <Link to="/Chat-support">
            <td className='border border-solid border-slate-500 flex hover:bg-red-200 items-center justify-center px-16 py-4'>
              Contact
            </td>
            </Link>
          </tr>
        </tbody>
      </table>
        )
    }
      
    </div>
  );
}
