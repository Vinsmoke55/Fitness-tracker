import {configureStore} from '@reduxjs/toolkit'
import exerciseReducer from '../features/exerciseSlice'
import loginReducer from '../features/loginSlice'

export const store=configureStore({
	reducer:{
		exercise:exerciseReducer,
		login:loginReducer
	},
})
