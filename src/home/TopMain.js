import React from 'react';
import CategoryComponent from './CategoryComponent';
import { category } from '../Constant/category';

export default function TopMain() {
  let items = category.map((e, index) => (
    <CategoryComponent key={index} data={e} />
  ));

  return (
    <div className=''>
    <div className='flex flex-wrap justify-center py-4 lg:py-11'>
      {items}
    </div>
    </div>
    
  );
}

