import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../features/adminSlice';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.admin);

  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '', image: '' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      dispatch(updateProduct(editingProduct));
      setEditingProduct(null);
    } else {
      dispatch(addProduct(newProduct));
      setNewProduct({ title: '', price: '', description: '', image: '' });
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container border-solid border-2 border-yellow-800 mx-auto p-10 my-20">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2 ">
          <label className="block text-start text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={editingProduct ? editingProduct.title : newProduct.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-start text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={editingProduct ? editingProduct.price : newProduct.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-start text-gray-700">Description</label>
          <textarea
            name="description"
            value={editingProduct ? editingProduct.description : newProduct.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div className="mb-2">
          <label className="block text-start text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={editingProduct ? editingProduct.image : newProduct.image}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-4">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-gray-700 text-sm">{product.description}</p>
            <div className="mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
