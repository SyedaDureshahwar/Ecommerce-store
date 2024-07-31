import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const AdminPanel = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-yellow-800 text-white p-5">
        <h2 className="text-2xl mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/admin/products" className="hover:underline">Product List</Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/add-product" className="hover:underline">Add Product</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full lg:w-3/4 p-5">
        <Routes>
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:productId" element={<EditProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
