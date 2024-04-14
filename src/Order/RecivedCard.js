import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { UrlLink } from '../Config';
const RecivedCard = ({ obj }) => {
  const { status, _id, orderedProduct, orderedUser, orderedQuantity, mode_of_payment, Payment_id, Payamount, createdAt } = obj;
  const [Status,setStatus]=useState('');
  
  const saveData=async (req,res)=>{
    try{
          const response=await axios.post(`${UrlLink}/save/staus`,{
            status:Status,
            _id:_id
          })
          if(response.status==200)
          {
            console.log(response);
          }
    }
    catch(error)
    {
      console.log(error);
    }
  }
  useEffect(()=>{
     saveData();
  },[Status])

  const handleChange=(event)=>{
      setStatus(event.target.value);
    
  }
  return (
    <div className="bg-green-100 border border-green-300 p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={orderedProduct?.productImage1} alt={orderedProduct?.ProductName} className="w-16 h-16 object-cover rounded-md mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{orderedProduct?.ProductName}</h3>
            <p className="text-gray-600">{orderedQuantity} x {Payamount}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-700"><span className="font-semibold">Status:</span> {status}</p>
          <p className="text-gray-600">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mb-4">
        {mode_of_payment === 'online' && (
          <p className="text-gray-700"><span className="font-semibold">Payment ID:</span> {Payment_id}</p>
        )}
        <p className="text-gray-700"><span className="font-semibold">Mode of Payment:</span> {mode_of_payment}</p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700"><span className="font-semibold">User:</span> {orderedUser?.name}</p>
        <p className="text-gray-600">{orderedUser?.email}</p>
        <p className="text-gray-600">{orderedUser?.mobileNumber}</p>
        <p className="text-gray-700"><span className="font-semibold">Delivery Address:</span> {orderedUser?.deliveryAddress}</p>
      </div>

      <div className="flex items-center justify-end">
        <label className="mr-2">Order Status:</label>
        <select className="border rounded-md p-2" defaultValue={status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="out_for_delivery">Out for Delivery</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
};

export default RecivedCard;
