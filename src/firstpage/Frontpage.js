import React from 'react'
import Admin from '../../assets/admin.jpg'
import user from '../../assets/user.jpg'
import { Link } from 'react-router-dom'

export default function Frontpage() {
  return (
    <div className='flex flex-wrap items-center justify-center mt-28'>
      <div className='flex-col'>
        <img src={Admin} alt=""  height={150} width={200}  />
        <Link to="/home">
        <button className='justify-center p-2 mt-4 place-content-center bg-pink-400 rounded-md w-48 hover:scale-90'>Admin</button>
        </Link>
      </div>
      <div className='flex-col pl-4 '>
        <img src={user} alt="" height={150} width={200} />
        <Link to="/home">
        <button className='justify-center p-2 mt-4 place-content-center bg-pink-400 rounded-md w-48 hover:scale-90 '>User</button>
        </Link>
      </div>
      
    </div>
  )
}
