import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { UrlLink } from '../Config';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
const GreenCard = ({ data }) => {
  const [msg,setmsg]=useState('');
  const navigate=useNavigate();
 const handleDelete=async ()=>{
  try{
    const response=await axios.post(`${UrlLink}/delete/Product`,{_id:data._id});
          
          

  }
  catch(error){
    if (error.isAxiosError) {
      setmsg(error.response.data.msg)
 } 
       console.log(error)
  }
 }
 const handleEdit=()=>{
      navigate(`/Update/${data._id}`)
 }
 const calculateOriginalPrice = () => {
  if (data.Price && data.Offer) {
    const currentPrice = parseFloat(data.Price);
    const offerPercentage = parseFloat(data.Offer);
    const originalPrice = currentPrice / (1 - offerPercentage / 100);
    return originalPrice.toFixed(2);
  }
  return null;
};
  
data.originalPrice = calculateOriginalPrice();

  return (
    <div className="bg-white p-6 rounded-md mt-3 shadow-lg flex flex-col lg:flex-row">
  
      
        <div className="w-full lg:w-2/3 mb-4 lg:mb-0 lg:mr-4">
            <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} className="w-full">
              <img src={data?.productImage1} alt="" className="w-full h-80 object-contain rounded-md shadow-md mb-4" />
              <img src={data?.productImage2} alt="" className="w-full h-80 object-contain rounded-md shadow-md mb-4" />
            </Carousel>
          </div>
        
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-2">{data.productName}</h1>
              <p className="text-lg text-gray-600 mb-2">{data.productCategory}</p>
              {
                data.originalPrice!==null ?(
                    <p className="text-gray-500 text-sm line-through mr-2">
                <FontAwesomeIcon icon={faIndianRupeeSign}/>{data.originalPrice}
              </p>
                ):(null)
            }
              
              <p className="text-green-500 text-xl font-bold"><FontAwesomeIcon icon={faIndianRupeeSign}/>{data.Price}</p>
            
       
          {data.Offer ?(
            <p className="text-red-500 text-lg font-bold">
              {data.Offer}% OFF
            </p>
          ):(null)}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-base">{data.description}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <span className="text-base font-semibold">Warranty:</span>
                  <span className="ml-2 text-base">{data.warranty} years</span>
                </div>
                <div className="flex items-center">
                  <span className="text-base font-semibold">Guarantee:</span>
                  <span className="ml-2 text-base">{data.guarantee} years</span>
                </div>
              </div>
              <p className="text-base">Available Stock: {data.stock}</p>
            </div>
            <div className="flex mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4"
               
              onClick={handleEdit}>
                Edit
              </button>
             
              <button
                className="bg-red-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
              
              onClick={handleDelete}>
                Delete
              </button>
            
              
            </div>
            {
            msg.length!=0 ?(
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
           <h3>{msg}</h3>
          </div>
            ):(
              <>
                
              </>
            )
          }
            
          </div>
       
    </div>
  );
};

export default GreenCard;
