import React from 'react';
import { Link } from 'react-router-dom';
const ProductSubmitted = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="green"
        className="bi bi-check-circle text-green-500"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.354 5.646a.5.5 0 0 1 .707.707l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6 10.293l4.646-4.647z" />
      </svg>
      <p className="text-xl font-semibold mt-4">Product is submitted</p>
      <div className="mt-8">
      <Link to="/createProduct">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Another Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSubmitted;

