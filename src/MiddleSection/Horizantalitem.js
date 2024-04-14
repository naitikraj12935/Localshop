import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import LaunchCard from '../NewLunchandSale/LaunchCard';
import "./Horizantal.css";

const HorizontalItem = ({ obj }) => {
  // Use useRef to get a reference to the scroll-item element
  const boxRef = useRef(null);
  const handleLeft = () => {
    console.log("Left button clicked");
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft -= width;
  }
  
  const handleRight = () => {
    console.log("Right button clicked");
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft += width;
  }
  
  const handleClick = () => {
    console.log("Link clicked");
    console.log(boxRef.current);
  }
  

  const Show = obj.showdata.map((item, index) => (
    <Link key={index} to={`/product/${item._id}`} onClick={handleClick}>
      <div className="group relative grid place-content-center bg-white p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out lg:mr-4 ml-4 lg:mb-4">
      
        <LaunchCard obj={item} />
        <div className="absolute top-0 right-0 p-2 bg-blue-300 text-white rounded-bl-lg">
          {item.offer && <span>{item.offer}% OFF</span>}
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="relative bg-blue-300 grid place-content-center text-white p-4 mb-4 mt-2">
        <div className="absolute top-0 left-0 h-4 w-4 bg-blue-300 transform -translate-y-1 -translate-x-1 rotate-45"></div>
        <h1 className="text-xl font-bold ml-6">{obj._id}</h1>
      </div>

      <div className="relative flex justify-between">
        <button className="sticky top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600" onClick={handleLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="sticky top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-600" onClick={handleRight}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>
        <div className="scroll-item flex overflow-hidden" ref={boxRef}>
          {Show}
        </div>

        
      
    </>
  )
  
  ;
};

export default HorizontalItem;
