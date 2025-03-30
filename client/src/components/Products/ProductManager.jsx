import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const ProductManager = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Product Management</h2>
      
      <div className="w-full max-w-7xl space-y-6">
        {/* Product Form Container */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <ProductForm token={token} fetchProducts={fetchProducts} product={editingProduct} />
        </div>

        {/* Product List Container */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <ProductList
            token={token}
            products={products}
            setProducts={setProducts}
            setEditingProduct={setEditingProduct}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
