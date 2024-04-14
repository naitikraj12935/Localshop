// OrderItem.js

import React from 'react';
import axios from 'axios'
import { UrlLink } from '../Config';
import { useState } from 'react';
import { Usercontext } from '../Context/Contextapi';
import { useContext } from 'react';


const OrderItem = ({obj,fun}) => {
  const {user}=useContext(Usercontext);
  const [msg,setmsg]=useState('');
    const { orderedProduct, orderedQuantity, Payamount, createdAt, mode_of_payment,_id,status } = obj;
    const arrivingTime = new Date(createdAt);
  arrivingTime.setDate(arrivingTime.getDate() + 7);

  const [refundStatus, setRefundStatus] = useState('');

  const handleRefund = async (Payment_id,Payamount) => {
    try {
      const response = await axios.post(`${UrlLink}/api/refund`,{
        paymentId:Payment_id,
         amount:Payamount
      }); // Replace PAYMENT_ID with the actual payment ID
      if(response)
      {
        console.log(response)
        setRefundStatus(response.data.status);
      }
      
    } catch (error) {
      console.error(error);
      setRefundStatus('Error');
    }
  };

  const CancelOrder=async ()=>{
     try{     

            const response=await axios.post(`${UrlLink}/product/order/cancel`,{_id:_id});
            if(response)
            {
               if(response?.data?.Order?.Payment_id!=='')
               {
                  await handleRefund(response?.data?.Order?.Payment_id,response?.data?.Order?.Payamount)
               }

               fun();
            }
     }
     catch(error)
     {
      if (error.isAxiosError) {
        setmsg(error.response.data.msg)
   } 
    console.log(error);
           
     }
  }


  return (
    <div className="bg-white rounded-md p-4 shadow-md mb-8">
      <div className="flex items-center mb-4">
        <img src={ orderedProduct?.productImage1} alt="Product" className="w-20 h-20 object-cover mr-4" />
        <div>
          <p className="text-lg font-semibold">{ orderedProduct?.productName}</p>
          <p className="text-lg font-semibold">{mode_of_payment === 'online'?'Paid Amount' :'Pay'}:{Payamount}</p>
          <p className="text-sm text-gray-500">Payment Status: {mode_of_payment === 'online' ? 'Paid' : 'Cash on Delivery'}</p>
          <p className="text-sm text-gray-500">Delivery at:{user?.deliveryAddress}</p>
          <p className="text-sm text-gray-500">Ordered Time: {new Date(createdAt).toLocaleString()}</p>
          <p className="text-sm text-gray-500">Arriving Time: {new Date(arrivingTime).toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-base font-bold mr-4">Quantity: {orderedQuantity}</p>
        <p className="text-base font-bold mr-4">Status: {status}</p>

        <button
          className="bg-red-500 text-white rounded-md px-4 py-2 font-bold shadow-md hover:bg-red-600" onClick={CancelOrder}
          
        >
          Cancel Order
        </button>
      </div>
      {msg.length !== 0 ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
                  <h3>{msg}</h3>
                </div>
              ) : null}
    </div>
  );
};

export default OrderItem;
