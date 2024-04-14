import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import * as Yup from 'yup';
import { UrlLink } from '../Config';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../Context/Contextapi';
import { useState } from 'react';

const Profile = () => {
    const {user,setuser}=useContext(Usercontext);
  const nevigate=useNavigate();
  const [msg,setmsg]=useState('');
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Your Profile</h1>
      <Formik
        initialValues={{
          name: user?.name || '',
          email: user?.email || '',
          mobileNumber: user?.mobileNumber || '',
         
          deliveryAddress: user?.deliveryAddress ||'',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required').min(4, 'Enter at least 4 characters').max(25, 'Enter at most 25 characters'),
          email: Yup.string().email('Invalid email').required('Email is required').max(100, 'Enter under 100 characters'),
          mobileNumber: Yup.string().matches(/^[0-9]{10,15}$/, 'Enter a valid mobile number').required('Mobile number is required').max(15, 'Enter a valid mobile number'),
         
          deliveryAddress: Yup.string().required('Delivery Address is required').min(10, 'Enter at least 10 characters'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
  try {
    values._id=user?._id
    const response = await axios.post(`${UrlLink}/profile`, values);
    // Handle successful response from the server
    if(response.status==200)
    {
        console.log('Success:', response.data);
        setuser(response.data.data)
        nevigate('/login')
    }
   
   
    // You can perform additional actions based on the response if needed
  } catch (error) {
    // Handle errors here
    if(error.isAxiosError)
    {
      setmsg(error.response.data.msg)
    }
    console.error('Error:', error);
  } finally {
    setSubmitting(false); // Reset the form submission state
  }
}}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">Name</label>
              <Field type="text" name="name" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <Field type="email" name="email" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block font-medium">Mobile Number</label>
              <Field type="text" name="mobileNumber" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm" />
            </div>


            <div>
              <label htmlFor="deliveryAddress" className="block font-medium">Delivery Address</label>
              <Field type="text" name="deliveryAddress" className="w-full border rounded px-3 py-2 mt-1" />
              <ErrorMessage name="deliveryAddress" component="div" className="text-red-500 text-sm" />
            </div>
            {
            msg.length!==0 ?(
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
            
             Save
            </button>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
