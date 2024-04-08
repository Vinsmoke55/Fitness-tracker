import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: null,
  error: ''
};

export const postLogin = createAsyncThunk(
  'login/postLogin',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = ''; // Clear error when login is successful
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.loading = false;
        state.user = {}; // Corrected to empty object
        state.error = action.payload; // Access error message from payload directly
      });
  }
});

export default loginSlice.reducer;
