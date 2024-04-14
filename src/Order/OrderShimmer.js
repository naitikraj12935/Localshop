// OrderShimmer.js

import React from 'react';

const OrderShimmer = () => {
  return (
    <div className="bg-white border p-4 rounded shadow-md animate-pulse">
      <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
      <div className="h-2 bg-gray-300 mb-2 rounded w-1/2"></div>
      <div className="h-2 bg-gray-300 mb-2 rounded w-2/3"></div>
      <div className="h-2 bg-gray-300 mb-2 rounded w-3/4"></div>
    </div>
  );
};

export default OrderShimmer;
