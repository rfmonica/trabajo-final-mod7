// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, email, password } = action.payload;
      if (password === 'mod7reactusip') {
        state.username = username;
        state.email = email;
        state.password = password;
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

