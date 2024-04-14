import React, { useEffect, useState } from 'react';
const Section=({name,description,title,isvisible,ontoggle,oftoggle})=>{
   return (
      <div className='m-5'>
      <h1 className='caret-gray-500 border-s'>{name}</h1>
       {
         isvisible ? (
            <div>
            <button onClick={oftoggle} className='rounded-sm bg-pink-400 px-4'>hide</button>
            <p>{description}</p>
            </div>
         ):(
             <button onClick={ontoggle} className='rounded-sm bg-purple-400 px-4 '>show</button>
         )
       }
      </div>
   )
}

export default function Toggle() {
 ; // Empty dependency array to run once on mount
 const [toggle,settoggle]=useState('team');

  return (
     <>
     <Section name={'naitik'} description={'how are you buddy'} titile={'find out'} isvisible={toggle==='naitik'} ontoggle={()=>settoggle('naitik')} oftoggle={()=>settoggle('')}/>
     <Section name={'adarsh'} description={'how are you buddy'} titile={'find out me'} isvisible={toggle==='adarsh'}ontoggle={()=>settoggle('adarsh')} oftoggle={()=>settoggle('')}/>
        
     </>
  )
}