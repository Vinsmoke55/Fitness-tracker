import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './nav'

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      .split('=')[1];

    return cookieValue;
  };

  const handleSignup = async () => {
    try {
      const csrfToken = getCSRFToken();

      const response = await axios.post(
        'http://localhost:8000/api/signup',
        { username, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
        }
      );

      if (response.status === 200) {
        console.log('Success:', response.data);
      } else {
        console.log('Failed:', response.data);
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <>
      <NavBar />
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-green-500">Signup</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Signup
      </button>
    </div>
    </>
  );
};

export default SignupPage;
