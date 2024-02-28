import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({data,logout}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = (e) => {
    if (!document.getElementById('sidebar').contains(e.target) && !document.getElementById('open-sidebar').contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {data ?(    
    <div className="bg-gray-500">
      <div className="flex overflow-hidden bg-gray-500">
        <div className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform ${isSidebarOpen ? '' : 'transform -translate-x-full'} ease-in-out duration-300`} id="sidebar">
          <div className="p-4">
            <h1 className="uppercase "><span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">{data.username}</span></h1>
            <ul className="mt-4 ml-3">
              <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Workouts</a></li>
              <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Profile</a></li>
              <button className="bg-black" onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-black shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <h1 className="text-xl font-semibold text-white">Fitness Tracker</h1>
                <button className="text-gray-500 hover:text-gray-600" id="open-sidebar" onClick={toggleSidebar}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ):(
    <div className="bg-gray-500">
      <div className="flex overflow-hidden bg-gray-500">
        <div className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform ${isSidebarOpen ? '' : 'transform -translate-x-full'} ease-in-out duration-300`} id="sidebar">
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Sidebar</h1>
            <ul className="mt-4">
              <li className="mb-2"><a href="/login" className="block hover:text-indigo-400">login</a></li>
              <li className="mb-2"><a href="/signup" className="block hover:text-indigo-400">Signup</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-black shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <h1 className="text-xl font-semibold text-white">Fitness Tracker</h1>
                <button className="text-gray-500 hover:text-gray-600" id="open-sidebar" onClick={toggleSidebar}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}

    </>
  );
};

export default Navbar;
