import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
	loading:false,
	user:{},
	error:''
}

export const postSignup=createAsyncThunk('signup/postSignup',async(userData,thunkAPI)=>{
	try{
		const response=await axios.post('http://localhost:8000/api/signup', userData)
		return response.data
	}
	catch(error){
		return thunkAPI.rejectWithValue(error.response.data)
	}
})

const signupSlice=createSlice({
	name:'signup',
	initialState,
	reducers:{},
	extraReducers:builder=>{
		builder.addCase(postSignup.pending,(state)=>{
			state.loading=true
		})
		.addCase(postSignup.fulfilled,(state,action)=>{
			state.loading=false
			state.user=action.payload
			state.error=''
		})
		.addCase(postSignup.rejected,(state,action)=>{
			state.loading=false
			state.user={}
			state.error=action.error.message
		})
	}
})

export default signupSlice.reducer