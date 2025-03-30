import React from 'react';

const ProductList = ({ token, products, setEditingProduct, deleteProduct }) => {
  return (
    <div className="w-full max-w-7xl overflow-x-auto bg-white p-6 shadow-md rounded-lg">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Rating</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {products.map((product) => (
            <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">{product.description}</td>
              <td className="py-3 px-6 text-left">{product.category}</td>
              <td className="py-3 px-6 text-left">{product.price}</td>
              <td className="py-3 px-6 text-left">{product.rating}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => setEditingProduct(product)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
