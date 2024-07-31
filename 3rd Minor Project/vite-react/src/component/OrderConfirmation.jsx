import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveOrder } from '../features/userSlice';

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, shippingInfo, paymentInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (cart.length > 0) {
      const order = {
        id: new Date().getTime(),
        date: new Date().toISOString(),
        products: cart,
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        shippingInfo,
        paymentInfo,
      };

      dispatch(saveOrder(order));
    }
  }, [cart, shippingInfo, paymentInfo, dispatch]);

  return (
    <div className="container mx-auto p-4 my-20">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p className="text-gray-700">Thank you for your purchase! Your order has been confirmed.</p>
      <button
        onClick={() => navigate('/order-history')}
        className="bg-yellow-500 text-sm text-white px-4 rounded-lg py-2 mt-4"
      >
        View Order History
      </button>
    </div>
  );
};

export default OrderConfirmation;
