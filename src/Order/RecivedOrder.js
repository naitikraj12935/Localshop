// RecivedOrder.js

import React, { useContext, useEffect, useState } from 'react';
import { UrlLink } from '../Config';
import { Usercontext } from '../Context/Contextapi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OrderShimmer from './OrderShimmer';
import RecivedCard from './RecivedCard';

const RecivedOrder = () => {
  const { user } = useContext(Usercontext);
  const [recived, setRecived] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user.name === '') {
          navigate('/login');
        } else {
          const response = await axios.post(`${UrlLink}/recieved/order`, { Owner: user._id });
          if (response.status === 200) {
            console.log(response);
            setRecived(response.data.Orders);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Your Received Orders</h1>

      {recived.length === 0 ? (
        <OrderShimmer />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recived.map((item, index) => (
            <RecivedCard key={index} obj={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecivedOrder;
