import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPaymentInfo } from '../features/userSlice';

const PaymentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfoState] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfoState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPaymentInfo(paymentInfo));
    navigate('/checkout/confirmation');
  };

  return (
    <div className="container   border-solid border-2 border-yellow-800 mx-auto p-20 my-20">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4  text-sm font-bold text-start">
          <label htmlFor="cardNumber" className="block  text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-sm font-bold text-start">
          <label htmlFor="expirationDate" className="block text-gray-700 mb-2">Expiration Date</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4 text-sm font-bold text-start">
          <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-yellow-500 text-sm text-white px-4 py-2 rounded">Review Order</button>
      </form>
    </div>
  );
};

export default PaymentInfo;
