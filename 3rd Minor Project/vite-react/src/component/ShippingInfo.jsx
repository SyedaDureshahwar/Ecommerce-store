import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShippingInfo } from '../features/userSlice';

const ShippingInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfoState] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneno:'',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfoState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShippingInfo(shippingInfo));
    navigate('/checkout/payment');
  };

  return (
    <div className="container  border-solid border-2 border-yellow-800 mx-auto p-20 my-20">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="address" className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={shippingInfo.fname}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="address" className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={shippingInfo.lname}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="address" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={shippingInfo.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="address" className="block text-gray-700 mb-2">Phone no</label>
          <input
            type="number"
            id="phoneno"
            name="phoneno"
            value={shippingInfo.phoneno}
            onChange={handleChange}
            className="w-full border text-gray-900 rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="city" className="block text-gray-700 mb-2">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="postalCode" className="block text-gray-700 mb-2">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-start text-sm font-bold">
          <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-sm text-white px-4 py-2 rounded">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
