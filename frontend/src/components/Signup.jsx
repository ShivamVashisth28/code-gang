import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [leetcodeUserName, setLeetcodeUserName] = useState('');
  const [githubUserName, setGithubUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password ) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Handle the signup logic here (e.g., API call)
      setError('');
      console.log('Signed up successfully');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-600">User Name</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Create your username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="leetcodeUsername" className="block text-sm font-medium text-gray-600">Leetcode Username</label>
            <input
              type="text"
              id="leetcodeUsername"
              value={leetcodeUserName}
              onChange={(e) => setLeetcodeUserName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Leetcode username"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="githubUsername" className="block text-sm font-medium text-gray-600">Github Username</label>
            <input
              type="text"
              id="githubUsername"
              value={githubUserName}
              onChange={(e) => setGithubUserName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Github username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Create a password"
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/user/existing" className="text-indigo-600 hover:text-indigo-700">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
