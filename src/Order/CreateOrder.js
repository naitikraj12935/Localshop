import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UrlLink } from '../Config';
import { Usercontext } from '../Context/Contextapi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from './YourOrder';

const OrderCard = () => {
  const [mode_of_payment, setModeOfPayment] = useState('cash on delivery');
  const { user } = useContext(Usercontext);
  const [quantity, setQuantity] = useState(1);
  const { productid } = useParams();
  const [data, setData] = useState(null);
  const [allOrder,setallOrder]=useState([]);
  const [msg,setmsg]=useState('');
  const navigate = useNavigate();

  
  console.log(window);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if(productid!=='userOrder')
        {
          const response = await axios.get(`${UrlLink}/product/${productid}`);
          if (response) {
            console.log(response);
            setData(response?.data?.product);
          }
        }
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productid]);


  const getData = async () => {
    try {
      if (user?._id) {
        const response = await axios.post(`${UrlLink}/product/order/all`, { userId: user._id });
        if (response.status === 200) {
          console.log(response);
          
          setallOrder(response?.data?.orders);
        } else {
          console.error(response?.data?.msg);
          // Display an error message to the user
        }
      } else {
        console.error('User ID is not available.');
        // Display an error message or redirect to the login page
      }

    } catch (error) {
      console.error('Error fetching orders:', error);
      // Display an error message to the user
    }
  };
  
 
  useEffect(() => {
    if ( user?._id==='') {
        console.log(user);
      navigate('/login');
    } else {
        getData();
    }
  }, []);
   
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setModeOfPayment(e.target.value);
  };
  let initialvalue={
    orderedProduct:productid,
    orderedUser:user?._id,
    orderedQuantity:quantity,
    mode_of_payment:mode_of_payment,
    Payment_id:'',
    Order_id:'',
    Signature:''
  }

  const CancelOrder=()=>{
      getData();
  }

  const handleOrder = async () => {
    // Handle the order logic
    try{
        const response = await axios.post(`${UrlLink}/product/order`,initialvalue);
        if(response.status==200)
        {
            console.log(response);
            navigate('/order/userOrder')
           getData();
        }
        
      }
      catch(error)
      { if (error.isAxiosError) {
           setmsg(error.response.data.msg)
      } 
       console.log(error);
      }
  };
 
    const Order = allOrder.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    let amount=quantity*data?.Price;
    
   
   
    const Onlinehandle = async (amount) => {
      try {
        const { data: { key } } = await axios.get(`${UrlLink}/api/getkey`);
        const { data: { order } } = await axios.post(`${UrlLink}/api/checkout`, { amount }, { withCredentials: true });
    
        const options = {
          key,
          amount: order.amount,
          currency: "INR",
          name: `${data.createdBy.name}`,
          description: `${data.productName}`,
          image: `${data.productImage1}`,
          order_id: order.id,
          handler: function (response) {
            // Handle the successful payment response
            alert(response.razorpay_payment_id);
            initialvalue.Payment_id=response.razorpay_payment_id;
            alert(response.razorpay_order_id);
            initialvalue.Order_id=response.razorpay_order_id;
            alert(response.razorpay_signature);
            initialvalue.Signature=response.razorpay_signature
             handleOrder();
          },
          prefill: {
            name: `${user.name}`,
            email: `${user.email}`,
            contact: `${user.mobileNumber}`
          },
          notes: {
            address: 'Razorpay Corporate Office'
          },
          theme: {
            color: '#3399cc'
          }
        };
    
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      } catch (error) {
        console.error(error);
      }
    };
    
  useEffect(()=>{
    if(mode_of_payment==='online')
    {
        Onlinehandle(amount);
    }
  },[mode_of_payment])

  
  


  return (
    <>
      {productid !== 'userOrder' ? (
        <div className="container mx-auto mt-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Your Order</h2>
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2 font-bold shadow-md hover:bg-blue-600"
              onClick={handleOrder}
            >
              {mode_of_payment === 'online' ? 'Proceed to Payment' : 'Order Now'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product details */}
  
            {/* Order summary */}
            <div className="bg-white rounded-md p-4 shadow-md">
              <p className="text-lg font-semibold mb-4">Order Summary</p>
              <div className="flex items-center mb-4">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleChange}
                  max={data?.stock || 0}
                  min={data?.stock > 0 ? data.stock : 0}
                  className="border rounded-md p-2 w-16"
                />
              </div>
              <div className="mb-4">
                <p className="text-sm mb-2">Payment Method:</p>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={mode_of_payment === 'online'}
                    onChange={handlePaymentChange}
                    
                  />
                  <span className="ml-2 text-base">Online Payment</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cash on delivery"
                    checked={mode_of_payment === 'cash on delivery'}
                    onChange={handlePaymentChange}
                  />
                  <span className="ml-2 text-base">Cash on Delivery</span>
                </label>
              </div>
              <div className="border-t border-gray-300 pt-2">
                <span className="text-base font-medium">Total:</span>
                <span className="ml-2 text-base font-bold">₹{data?.Price * quantity}</span>
              </div>
              {msg.length !== 0 ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
                  <h3>{msg}</h3>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
  
      {allOrder.length === 0 ? (
        <h1>You have not done any orders yet</h1>
      ) : (
        Order.map((item, index) => <OrderItem key={index} obj={item} fun={CancelOrder}/>)
      )}
    </>
  );
      }  
export default OrderCard;
