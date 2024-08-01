import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../features/userSlice';

const ProductListing = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) return <div className='text-gray-900'>Loading...</div>;
  if (error) return <div className='text-red-600'>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-yellow-800 font-bold py-5'>Product Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white  border-solid border-2 border-yellow-800 rounded-lg shadow-md p-5">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{ product.title.slice(0, 20)}</h2>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>
              <p className="text-gray-700 text-sm mb-2">Rating:{product.rating.rate}</p>
              <button type="button" class="focus:outline-none px-10 py-5 text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm me-2 mb-2 dark:focus:ring-yellow-900"> <Link to={`/product/${product.id}`} key={product.id}>SHOP NOW</Link></button>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
