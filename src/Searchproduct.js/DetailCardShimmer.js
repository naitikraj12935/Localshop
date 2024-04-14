import React from 'react';

const DetailCardShimmer = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <div className="animate-pulse">
        <div className="w-80 h-80 bg-gray-300 rounded-md shadow-md mb-4"></div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-3xl font-semibold bg-gray-300 h-8 w-3/4 mb-2 rounded"></div>
            <div className="text-lg text-gray-600 bg-gray-300 h-6 w-1/2 mb-2 rounded"></div>
            <div className="text-2xl text-green-700 font-bold bg-gray-300 h-8 w-20 rounded"></div>
            <div className="bg-gray-300 h-24 w-full rounded mb-4"></div>
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <span className="text-base font-semibold bg-gray-300 h-4 w-12 rounded"></span>
                <span className="ml-2 text-base bg-gray-300 h-4 w-6 rounded"></span>
              </div>
              <div className="flex items-center">
                <span className="text-base font-semibold bg-gray-300 h-4 w-12 rounded"></span>
                <span className="ml-2 text-base bg-gray-300 h-4 w-6 rounded"></span>
              </div>
            </div>
            <div className="text-base bg-gray-300 h-4 w-24 rounded"></div>
          </div>
          <div className="flex mt-6">
            <div className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full mr-4 bg-gray-300 h-12 w-20"></div>
            <div className="bg-green-500 text-white font-bold py-3 px-6 rounded-full bg-gray-300 h-12 w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardShimmer;
