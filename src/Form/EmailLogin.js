import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UrlLink } from '../Config';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Usercontext} from '../Context/Contextapi';
import { useContext } from 'react';
const EmailLogin = ({handledata}) => {
  const [msg,setmsg]=useState('');
    const handlelogin=()=>{
        handledata('');
    }
    const {user,setuser}=useContext(Usercontext);
 const nevigate=useNavigate();
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
      <Formik
        initialValues={{
          
          email: '',
          password: ''
         
        }}
        validationSchema={Yup.object().shape({
         
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
          
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try{
              const response=await axios.post(`${UrlLink}/login`,values, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
              if(response.status===200)
              {
                console.log(response);
                 setuser(response.data.loginUser.updatedUser);
                 console.log(user)
                 nevigate('/home');
              }
          }
          catch(error)
          {
            if (error.isAxiosError) {
           setmsg(error.response.data.msg)
      } 
             console.log('write error',error);
          }
          
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            

            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <Field type="email" name="email" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block font-medium">Password</label>
              <Field type="password" name="password" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {
            msg.length!=0 ?(
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
           <h3>{msg}</h3>
          </div>
            ):(
              <>
                
              </>
            )
          }
          
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              
              className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600" onClick={handlelogin}
            >
              back
            </button>
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmailLogin;
