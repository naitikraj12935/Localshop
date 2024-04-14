import React from 'react';

const ShimmerEffect = () => {
  // Create an array of 20 items
  const cards = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card}
          className="bg-white rounded-lg shadow-md p-6 animate-pulse"
        >
          <div className="bg-gray-200 h-20 w-full mb-4 rounded-lg"></div>
          <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEffect;
