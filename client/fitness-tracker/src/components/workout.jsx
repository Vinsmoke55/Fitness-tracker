import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Workout=()=>{
const [workouts,setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/workout/');
        setWorkout(response.data);
      } catch (error) {
        console.error('Error fetching workout:', error);
      }
    };

    fetchData();
  }, []);
	return (
		<>
		<div className="container mx-auto mt-8">
	      <h1 className="text-3xl font-bold mb-6 text-center">Workout List</h1>
	      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	        {workouts.map((workout) => (
	          <li>
	            
	          </li>
	        ))}
	      </ul>
	    </div>
		</>
		)
}