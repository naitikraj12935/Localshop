import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UrlLink } from '../Config'
import LaunchCard from './LaunchCard';
import { Link } from 'react-router-dom';
export default function Sale() {
const [Launch,setLaunch]=useState([]);

useEffect(()=>{
   const getData=async ()=>{
    try{
          const response=await axios.get(`${UrlLink}/Sale`)
          if(response.status==200)
          {
            console.log(response)
            setLaunch(response.data.SaleData)
          }
    }
    catch(error)
    {
        console.log(error);
    }
   }
   getData();
},[])

  return (<>

<div className="relative bg-blue-500 grid place-content-center text-white p-4 mb-4 mt-2">
      <div className="absolute top-0 left-0 h-4 w-4 bg-blue-500 transform -translate-y-1 -translate-x-1 rotate-45"></div>
      <h1 className="text-xl font-bold ml-6">Sale Offers</h1>
    </div>
    <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Launch.map((item, index) => (
      <Link key={index} to={`/product/${item._id}`}>
        <div className="group relative grid place-content-center bg-white p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <LaunchCard obj={item} />
          <div className="absolute top-0 right-0 p-2 bg-blue-500 text-white rounded-bl-lg">
            {item.offer && <span>{item.offer}% OFF</span>}
          </div>
        </div>
      </Link>
    ))}
  </div>
  </>
  )
}
