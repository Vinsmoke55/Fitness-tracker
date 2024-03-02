// Example using React hooks and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/workouts');
                setWorkouts(response.data);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Workouts</h1>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        <strong>{workout.user.username}</strong> - {workout.date}
                        <ul>
                            {workout.exercises.map((exercise) => (
                                <li key={exercise.id}>
                                    {exercise.exercise.name} - {exercise.sets} sets, {exercise.reps} reps, {exercise.weight} kg
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutList;
