
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { orderId } = useParams();
  const { orders } = useSelector((state) => state.user);

  const order = orders.find((order) => order.id === parseInt(orderId, 10));

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Order #{order.id} Details</h2>
      <p className="text-gray-700 mb-2">Date: {new Date(order.date).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2">Total: ${order.total.toFixed(2)}</p>
      <p className="text-gray-700 mb-2">Status: {order.status}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Items:</h3>
        {order.items.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-700">${item.price} x {item.quantity}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
