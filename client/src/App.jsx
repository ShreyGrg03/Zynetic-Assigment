import React, { useState } from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProductManager from './components/Products/ProductManager';

const App = () => {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {!token ? (
        
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-lg shadow-xl">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </h2>
            {isLogin ? <Login setToken={setToken} /> : <Signup />}
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleForm}
                className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
              >
                {isLogin ? 'New? Click to Register' : 'Done! Click to Login'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        
        <div className="w-full min-h-screen bg-gray-100">
          <ProductManager token={token} />
        </div>
      )}
    </>
  );
};

export default App;
