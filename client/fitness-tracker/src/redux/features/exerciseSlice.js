import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
	loading:false,
	exercise:[],
	error:''
}

export const fetchExercise=createAsyncThunk('exercise/fetchExercise',()=>{
	return axios.get('http://localhost:8000/api/exercise/')
	.then(response=>response.data)
})

const exerciseSlice=createSlice({
	name:'exercise',
	initialState,
	extraReducers:builder=>{
		builder.addCase(fetchExercise.pending,(state)=>{
			state.loading=true
		})
		builder.addCase(fetchExercise.fulfilled,(state,action)=>{
			state.loading=false
			state.exercise=action.payload
			state.error=''
		})
		builder.addCase(fetchExercise.rejected,(state,action)=>{
			state.loading=false
			state.exercise=[]
			state.error=action.error.message
		})
	}
})

export default exerciseSlice.reducer
