import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderHistory } from '../features/userSlice';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { orderHistory, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  if (loading) return <div className="text-yellow-800">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="container  border-solid border-2 border-yellow-800 mx-auto p-20 my-20">
      <h1 className="text-2xl text-gray-900 font-bold mb-4">Order History</h1>
      {orderHistory.length === 0 ? (
        <p className="text-gray-700">You have no order history.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {orderHistory.map((order) => (
            <div key={order.id} className="bg-white text-sm border-solid border-2 border-gray-800 mx-auto  rounded-lg p-4">
              <h2 className="text-lg font-bold mb-2">Order ID: {order.id}</h2>
              <p className="text-gray-700 mb-2">Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-2">Total: ${order.total.toFixed(2)}</p>
              <h3 className="text-md font-semibold mt-4 mb-2">Items:</h3>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id} className="text-gray-700">
                    {product.title} - Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
