import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function RecentSearch({obj,func}) {
    
  let NewData;
  if (obj.length > 5) {
    // If the length of obj is greater than 5
    NewData = obj.slice(0, 6);  // Create a new array with the first 6 elements of obj
  } else {
    // If the length of obj is 5 or less
    NewData = obj;  // Set NewData equal to the original array
  }
  const handleClick=()=>{
    func('')
  }
  

  return (
    <div className='absolute w-4/5 lg:w-6/12 rounded-md  p-1 bg-slate-100 top-12 z-40'>
  {
    NewData.map((his,index)=>( 
      <Link to={`/search/${his}`}>
    <div className='flex justify-between p-1 border-b-2 hover:shadow-xl' key={index} onClick={handleClick}>
      <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#81abf3",}} />
      <h1>{his}</h1>
    </div>
    </Link>

    ))
  }
    </div>
    
  )
}
