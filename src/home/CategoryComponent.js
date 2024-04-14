import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryComponent({ data }) {
  return (
    <div className='px-2 border-none bg-slate-200 lg:px-8 border-blue-200 border-4 hover:border-blue-400 hover:shadow-xl'>
    <Link to={`/search/${data.title}`}>
      <img src={data.Url} alt="" height={70} width={70} />
      <h1>{data.title}</h1>
      </Link>
    </div>
  );
}

