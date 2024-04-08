import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../redux/features/loginSlice'; // Corrected import path
import NavBar from './nav';
import Home from './home'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const userData = useSelector(state => state.login); // Corrected selector
  const dispatch = useDispatch(); // Corrected import

  const handleLogin =async () => {
    await dispatch(postLogin({ username, password }));
    setIsLoggedIn(true)

  };
  const logout=()=>{

  }

  // Check if userData is undefined before accessing userData.user
  const user = userData ? userData.user : null;

  return (
    <>
      {isLoggedIn ?(
        <div>
          <NavBar data={user,logout}/>
          <Home/>
        </div>
        ):(
<>
        <NavBar data={user,logout} />
      {userData.user && (<div className="text-black">logged in</div>)} 
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
      <p className="text-center font-bold p-2">Do not have an account. <a href="/signup" className="hover:text-green-500">Signup</a></p>
      {userData && userData.error && <p className="text-red-500 mt-4 text-2xl text-center">{userData.error}</p>}
      </>
        )}

      
    </>
  );
};

export default LoginPage;
