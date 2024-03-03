import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LoginPage from './components/login';
// import SignupPage from './components/signup';
// import Home from './components/home'
import Navbar from './components/nav'
// import WorkoutList from './components/workout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nav" element={<Navbar/>} />>
      	{/* <Route path="/" element={ */}
      	{/* 	<> */}
      	{/* 	<Navbar /> */}
      	{/* 	<Home /> */}
      	{/* 	</> */}
      	{/* 	} /> */}
       {/*  <Route path="/signup" element={<SignupPage />} /> */}
       {/*  <Route path="/login" element={<LoginPage/>} /> */}
       {/*  <Route path="/workout" element={<WorkoutList/>} /> */}

      </Routes>
    </Router>
  );
};

export default App;
