import React, { useState } from 'react';
import axios from 'axios';
import Home from './home';
import NavBar from './nav';
import Loader from './loader';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userdata, setUserdata] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      .split('=')[1];

    return cookieValue;
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const csrfToken = getCSRFToken();

      const response = await axios.post(
        'http://localhost:8000/api/login',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
        }
      );

      if (response.status === 200) {
        console.log('Success:', response.data);
        setUserdata(response.data);
      } else {
        console.log('Failed:', response.data);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {userdata ? (
            <>
              <NavBar data={userdata} />
              <Home data={userdata} />
            </>
          ) : (
            <>
              <NavBar data={userdata} />
              <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Login</h2>
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
                  <label className="block text-sm font-medium text-gray-600">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <button
                  onClick={handleLogin}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Login
                </button>
              </div>
              <p>Do not have an account. <a href="/signup">Signup</a></p>
              {error && <p className="text-red-500 mt-4 text-2xl">{error}</p>}
            </>
          )}
        </>
      )}
    </>
  );
};

export default LoginPage;
