import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setpassword('');
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900">

        <div className="p-8 rounded-lg shadow-lg bg-gray-800 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-white mb-6">Employee Management</h1>
          <p className="text-sm text-gray-400 text-center mb-8">Please login to manage your tasks and dashboard.</p>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
                placeholder="a@a.com"
                className="w-full p-3 text-gray-900 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
                type="password"
                placeholder="123"
                className="w-full p-3 text-gray-900 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-gray-400 text-center mt-6">
            © 2024 Employee Management App. All rights reserved.
          </p>
          <div className='text-center text-gray-400 mt-4'>
            <p>Credentials:</p>
            <p>a@a.com and 123</p>
            <p>e1@e.com and 123</p>
            <p>e2@e.com and 123</p>
          </div>
        </div>
      </div>

  );
};

export default Login;
