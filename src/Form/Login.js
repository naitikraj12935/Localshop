import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import EmailLogin from './EmailLogin'; // Assuming you have an EmailLogin component
import MobileLogin from './MobileLogin'; // Assuming you have a MobileLogin component



export default function Login() {
  const [login, setLogin] = useState('');
  const handledata=(data)=>{
       setLogin(data);
  }

  return (
    <>
      {login.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-md p-8 w-80">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                onClick={() => setLogin('email')}
              >
                Login with Email
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full"
                onClick={() => setLogin('mobile')}
              >
                Login with Mobile
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:text-blue-600">
                  Sign Up
                </Link>
              </p>
              <p className="text-sm text-gray-400">Some additional information or options can go here.</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {login === 'email' ? (
            <EmailLogin handledata={handledata} />
          ) : login === 'mobile' ? (
            <MobileLogin handledata={handledata}/>
          ) : null}
        </>
      )}
    </>
  );
}


