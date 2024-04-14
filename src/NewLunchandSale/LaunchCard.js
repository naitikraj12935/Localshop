import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const LaunchCard = ({ obj }) => {
  const calculateOriginalPrice = () => {
    if (obj.Price && obj.Offer) {
      const currentPrice = parseFloat(obj.Price);
      const offerPercentage = parseFloat(obj.Offer);
      const originalPrice = currentPrice / (1 - offerPercentage / 100);
      return originalPrice.toFixed(2);
    }
    return null;
  };

  const originalPrice = calculateOriginalPrice();

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between p-4 h-80 w-60 lg:h-96 lg:w-72">
      <img
        className="h-40 w-full object-cover"
        src={obj.productImage1}
        alt="Product"
      />
      <div className="flex flex-col justify-between mt-4">
        <div>
          <h2 className="text-xl font-bold mb-2">{obj.productName}</h2>
          <p className="text-gray-700 mb-2">{obj.productCategory}</p>
        </div>
        <div className="flex flex-col items-center">
          
            <div className="flex items-center mb-2">
            {
                originalPrice!==null ?(
                    <p className="text-gray-500 text-sm line-through mr-2">
                <FontAwesomeIcon icon={faIndianRupeeSign}/>{originalPrice}
              </p>
                ):(null)
            }
              
              <p className="text-green-500 text-xl font-bold"><FontAwesomeIcon icon={faIndianRupeeSign}/>{obj.Price}</p>
            </div>
       
          {obj.Offer ?(
            <p className="text-red-500 text-lg font-bold">
              {obj.Offer}% OFF
            </p>
          ):(null)}
          {/* You can add a button or any other elements here */}
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
