import React from 'react'
import Header from './header'
import TopMain from './TopMain'
import SliderComp from './SliderComp'
import MiddleController from '../MiddleSection/MiddleController'
import { Usercontext } from '../Context/Contextapi'
import { useContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { UrlLink } from '../Config';
import { useState } from 'react'

export default function Home() {
  const {setuser,setProducts}=useContext(Usercontext)
  const [Searchdata,setSearchdata]=useState([]);

//---------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(()=>{
    const getdata=async ()=>{
      try{
        const response = await axios.get(`${UrlLink}/verify/token`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        });
        
        if(response.status==200)
        {
          
          setuser(response.data.data)
        }
    }
    catch(error)
    {
       console.log(error);
    }
    }
    getdata();
     
  },[])
   if(Searchdata.length>0)
   {
    const ProductNames = [];
    Searchdata.map((item) => {
      ProductNames.push(item._id);
    
      item.product_Name.map((data) => {
        ProductNames.push(data);
      });
    });
    
    // Now, ProductNames array contains _id values and Product_Name values
    setProducts(ProductNames);
    
   }
  const getsearchData=async ()=>{
    try{
         const response=await axios.get(`${UrlLink}/all/product`);
         setSearchdata(response.data.Products);
    }
    catch(error){
       console.log(error);
    }
   }
  useEffect(()=>{
    getsearchData();
  },[])
  return (
    <div className="scroll-smooth">
     
  
    <TopMain/>
    <SliderComp className='z-0'/>
     <MiddleController />

     
    </div>
  )
}


