import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProductDetail, addToCart } from '../features/userSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { loading, productDetail, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  if (loading) return <div className='text-yellow-800'>Loading...</div>;
  if (error) return <div className='text-red-500'>Error: {error}</div>;

  return (
    <div className="container border-solid border-2 my-20 border-yellow-800 p-5 mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={productDetail.image}
          alt={productDetail.title}
          className="h-96 w-full object-cover lg:w-1/2"
        />
        <div className="lg:w-1/2">
          <h2 className="text-2xl text-yellow-800 font-semibold mb-4">{productDetail.title}</h2>
          <p className="text-gray-700 mb-4">${productDetail.price}</p>
          <p className="text-gray-600  text-sm mb-4">Price: ${productDetail.description}</p>
          
          <Link to="/cart">
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 mt-10 hover:bg-yellow-800 text-white px-2 py-2 rounded"
          >
            Add to Cart
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
