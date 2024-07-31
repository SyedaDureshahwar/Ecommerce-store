import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../features/userSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.user);

  // Handle removing a product from the cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Handle changing the quantity of a product
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Navigate to the checkout page
  const handleCheckout = () => {
    navigate('/checkout/cart-summary');
  };

  return (
    <div className="container border-solid border-2 border-yellow-800 mx-auto p-10 my-20">
      <h2 className="text-2xl font-semibold text-indigi-500 mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className=' text-red-500'>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-sm font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-900 mb-2">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mb-2">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-900 text-sm">Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    className="border  text-gray-900  rounded px-2 py-1 w-16"
                  />
                </div>
               
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white text-sm px-2 py-2 rounded mt-4 md:mt-0 md:ml-4"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h3 className="text-xl text-gray-900 font-semibold mb-2">Cart Total</h3>
            <p className="text-gray-900 mb-2">Total: ${calculateTotal().toFixed(2)}</p>
            <div className="flex justify-between items-center mt-4">
              <Link to="/products" className="bg-yellow-500 text-sm text-white px-4 rounded-lg py-2">Continue Shopping</Link>
              {cart.length > 0 && (
                <button
                  onClick={handleCheckout}
                  className="bg-indigo-600 text-sm text-white px-4 rounded-lg py-2"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
