import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { UrlLink } from '../Config';
import { Usercontext } from '../Context/Contextapi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const MobileLogin = ({ handledata }) => {
  const {user,setuser}=useContext(Usercontext);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [msg, setMsg] = useState('');
  const [newotp,setnewotp]=useState('######')
  const [gmsg,setgmsg]=useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);
  const nevigate=useNavigate();


  const handlelogin = () => {
    handledata('');
  };

  const generateOtp = async () => {
    try {
      const response = await axios.post(`${UrlLink}/sendOtp`, { mobileNumber });
      if (response.data.success) {
        console.log(response.data);
        setnewotp(response.data.Otp);
        setgmsg(response.data.msg);
        setOtpGenerated(true);
      } else {
        // Handle error response
        console.error('Failed to generate OTP:', response.data.msg);
        setMsg(response.data.msg);
      }
    } catch (error) {
      if (axios.isAxiosError && error.response) {
        console.error('Failed to generate OTP:', error.response.data.msg);
        setMsg(error.response.data.msg);
      } else {
        console.error('Error during OTP generation', error);
      }
    }
  };
  const getData=async ()=>{
    try{
      const response=await axios.post(`${UrlLink}/UserByMobile`,{mobileNumber:mobileNumber},{
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      // Handle the response accordingly
      if(response.status===200)
              {
                console.log(response);
                 setuser(response.data.loginUser.updatedUser);
                 console.log(user)
                 nevigate('/home');
              }
       else {
        // Handle error response
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error during form submission', error);
    }
    
    
  }

  const submitForm = async () => {

      if(newotp==otp)
      {
         getData();
      }
      else{
        setMsg('wrong Otp')
      }
      
  };

  const validateSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required('Mobile number is required')
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
    otp: Yup.string()
      .required('OTP is required')
      .matches(/^\d{6}$/, 'OTP must be a 4-digit number'),
  });

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Mobile Number OTP Verification</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="mobileNumber" className="block font-medium">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter your mobile number"
          />
      {validateSchema?.fields?.mobileNumber && validateSchema?.fields?.mobileNumber.errors?.map((error, index) => (
  <div key={index} className="text-red-500 text-sm">
    {error}
  </div>
))}
        </div>

        <button
          type="button"
          onClick={generateOtp}
          disabled={otpGenerated}
          className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
          Generate OTP
        </button>
        {gmsg.length !== 0 && (
          <div className="bg-red-100 border border-slate-400 text-green-700 px-4 py-2 rounded-md my-4">
            <h3>{gmsg}</h3>
          </div>
        )}
        {msg.length !== 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
            <h3>{msg}</h3>
          </div>
        )}

        <div>
          <label htmlFor="otp" className="block font-medium">
            Enter OTP
          </label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
            placeholder="Enter OTP"
          />
        {validateSchema?.fields?.otp && validateSchema?.fields?.otp.errors?.map((error, index) => (
  <div key={index} className="text-red-500 text-sm">
    {error}
  </div>
))}
        </div>

        {/* Your submission button */}
        <button
          type="button"
          onClick={submitForm}
          disabled={!otpGenerated}
          className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handlelogin}
          className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default MobileLogin;
