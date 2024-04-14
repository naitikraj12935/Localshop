import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UrlLink } from '../Config';
import { Usercontext } from '../Context/Contextapi';
import { useContext } from 'react';
import DetailCardShimmer from '../Searchproduct.js/DetailCardShimmer';
import GreenCard from './GreenCard';

export default function ProductBY() {
  const { user } = useContext(Usercontext);
  const [UserProduct, setUserProduct] = useState([{"_id":1}]);
  console.log(UserProduct)

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.post(`${UrlLink}/product/Create`, { _id: user._id });
        if (response.status === 200) {
            console.log(response);
          setUserProduct(response.data.Products);
          console.log(UserProduct)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      // You might want to use a cancel token or handle cleanup logic here if necessary
    };
  }, []);

  // Add a console log to check the state of UserProduct
  console.log('UserProduct:', UserProduct);

  return (
    <>
      {UserProduct && UserProduct[0]._id === 1 ? (
  <DetailCardShimmer />
) : (
    <div className="flex justify-evenly flex-wrap ">
      {UserProduct.map((item, index) => (
        <GreenCard key={index} data={item} />
      ))}
    </div>
)}

    </>
  );
}
