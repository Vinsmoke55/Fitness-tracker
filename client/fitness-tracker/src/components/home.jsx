import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {fetchExercise} from '../redux/features/exerciseSlice'
import Loader from './loader'

const Home = () => {
	const exercises=useSelector(state=>state.exercise)
	const dispatch=useDispatch()

	useEffect(()=>{
		dispatch(fetchExercise())
	},[])

  return (
  	<>
  	{exercises.loading && <div><Loader/></div>}
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Exercise List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.exercise.map((exercise) => (
          <li
            key={exercise.id}
            className="p-4 rounded-md shadow-md"
            style={{
              backgroundImage: `url('${exercise.image_link}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <strong className="block text-xl mb-2">{exercise.name}</strong>
            <p className="text-gray-600">{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
</>
  );
};

export default Home;


