import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({data}) => {
  return (
    <>
      {data ?(    
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Fitness Tracker
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/workouts" className="text-white hover:text-gray-300">
              Workouts
            </Link>
          </li>
          <li>
            <Link to="/exercises" className="text-white hover:text-gray-300">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>):(
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Fitness Tracker
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )}

    </>
  );
};

export default Navbar;
