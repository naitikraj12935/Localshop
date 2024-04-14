import React from 'react'
import HorizontalItem from './Horizantalitem'
import { UrlLink } from '../Config';
import axios from 'axios';
import { useEffect,useState } from 'react';
import ShimmerEffect from '../Searchproduct.js/ShimmerEffect';
export default function MiddleController() {
  const [Data,setData]=useState([]);

const getdata=async ()=>{
  try{
        const response=await axios.get(`${UrlLink}/top/product`);
        if(response.status==200)
        {
          console.log(response);
          setData(response.data.result);
        }
  }
  catch(error)
  {
       console.log(error);
  }
}
  useEffect(()=>{
        getdata(); 
  },[])


   
  return (
    <>
      <h1 className=" relative text-3xl font-bold text-center top-24 lg:top-72 md:top-52 text-gray-800">
  Top Selling Product in Each Category
</h1>
   {
    Data.length===0 ?(
      <ShimmerEffect/>
    ):(
      <div className='relative top-36 lg:top-72 md:top-52 flex flex-col '>
      {
        Data.map((item,index)=>(
          <HorizontalItem key={index} obj={item}/>
        ))
      }
    </div>
    )
   }
    
    </>
  )
}
