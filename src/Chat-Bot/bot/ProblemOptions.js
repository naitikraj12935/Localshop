import React from 'react';


export default function ProblemOptions(props) {
    const payment=()=>{
        props.actions.PaymentIssue();
    }
    const Refund=()=>{
        props.actions.RefundIssue();
    }
    const Product=()=>{
        props.actions.ProductIssue();
    }
    const Delivery=()=>{
        props.actions.DeliveryIssue();
    }
  return (
    <div className="flex flex-wrap gap-2">
      <button className="bg-blue-500 text-white rounded-lg p-2 lg:w-1/2" onClick={payment}>Payment Issue</button>
      <button className="bg-blue-500 text-white rounded-lg p-2 lg:w-1/2" onClick={Refund}>Refund Issue</button>
      <button className="bg-blue-500 text-white rounded-lg p-2 lg:w-1/2" onClick={Product}>Product Complain</button>
      <button className="bg-blue-500 text-white rounded-lg p-2 lg:w-1/2" onClick={Delivery}>Delivery Issue</button>
    </div>
  );
}
