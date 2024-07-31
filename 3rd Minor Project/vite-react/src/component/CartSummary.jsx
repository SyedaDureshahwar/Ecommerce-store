import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../features/userSlice';

const CartSummary = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.user);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="container  border-solid border-2 border-yellow-800 mx-auto p-10 my-20">
      <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-2">${item.price}</p>
                <div className="flex items-center">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm text-gray-900">Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    className="border  text-gray-900 rounded px-2 py-1 w-16"
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-sm text-white px-4 rounded-lg py-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <Link to="/checkout/shipping" className="bg-indigo-600 text-sm text-white px-4 rounded-lg py-2">Proceed to Shipping</Link>
    </div>
  );
};

export default CartSummary;
