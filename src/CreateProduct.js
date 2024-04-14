import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { UrlLink } from './Config';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from './Context/Contextapi';
const ProductForm = () => {
  
    const [msg,setmsg]=useState('');
    const nevigate=useNavigate();
    const {user}=useContext(Usercontext);
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    Price: '',
    stock: '',
    description: '',
    Offer:'',
    warranty: '',
    guarantee: '',
    productImage1:'',
    productImage2:'',
    createdBy:user._id ,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

const preset_key="u23cpkvp"
const cloud_name="dgq60qzce"
  
    

const handlefileChange = async (event) => {
  try {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      formData
    );
    if (response.data.secure_url) {
      setFormData(prevState => ({
        ...prevState,
        productImage1: response.data.secure_url
      }));
    }
    console.log('hello');
    console.log(response);

  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

  const handlefileChangesec = async (event) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', preset_key);
  
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
  
      if (response.data.secure_url) {
        setFormData(prevState => ({
          ...prevState,
          productImage2: response.data.secure_url
        }));
      }
  
      console.log('Upload successful');
      console.log(response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  console.log(formData)


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formData)
      
    try {
      const response = await axios.post(`${UrlLink}/addProduct`, formData);
      if(response)
      {
        nevigate('/product/submitted');
      }
      console.log('Product posted:', response.data);
      // Handle success or any further actions after posting the product
    } catch (error) {
      console.error('Error posting product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
       

        {/* Add other input fields similarly */}
        <div className="flex flex-col">
          <label htmlFor="productName" className="font-semibold">Product Name</label>
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="py-2 px-3 mt-1 border rounded" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productCategory" className="font-semibold">Product Category</label>
          <input type="text" name="productCategory" value={formData.productCategory} onChange={handleChange} className="py-2 px-3 mt-1 border rounded" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold">description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} className="py-2 px-3 mt-1 border rounded" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Price" className="font-semibold">Price</label>
          <input type="number" name="Price" value={formData.Price} onChange={handleChange} className="py-2 px-3 mt-1 border rounded" min={0} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Offer" className="font-semibold">Offer in percentage</label>
          <input type="number" name="Offer" value={formData.Offer} onChange={handleChange} className="py-2 px-3 mt-1 border rounded" min={0} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="stock" className="font-semibold">stock</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="py-2 px-3 mt-1 border rounded"  min={0}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="warranty" className="font-semibold">warranty</label>
          <input type="number" name="warranty" value={formData.warranty} onChange={handleChange} className="py-2 px-3 mt-1 border rounded"  min={0}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="guarantee" className="font-semibold">guarantee</label>
          <input type="number" name="guarantee" value={formData.guarantee} onChange={handleChange} className="py-2 px-3 mt-1 border rounded"  min={0}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="filedata1" className="font-semibold">Product Image 1</label>
          <input type="file"    onChange={handlefileChange} className="py-2 px-3 mt-1 border rounded" />
        </div>
        

        <div className="flex flex-col">
          <label htmlFor="fildata2" className="font-semibold">Product Image 2</label>
          <input type="file"   onChange={handlefileChangesec} className="py-2 px-3 mt-1 border rounded" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="createdBy" className="font-semibold">Created By</label>
          <input type="text" name="createdBy" value={formData.createdBy}  className="py-2 px-3 mt-1 border rounded" />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {
            msg?.length!=0 ?(
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md my-4">
           <h3>{msg}</h3>
          </div>
            ):(
              <>
                
              </>
            )
          }
    </div>
  );
};

export default ProductForm;
