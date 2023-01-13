import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { authApi } from 'redux/authentication/authApi';
import storage from 'redux-persist/lib/storage';
import { UserState } from 'types/types';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
} as UserState;

export const authSlice = createSlice({
  name: 'auth',

  initialState: initialState,
  reducers: {},

  extraReducers: function (builder) {
    builder
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,

        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.registration.matchFulfilled,

        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addMatcher(
        authApi.endpoints.fetchCurrentUser.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['user'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
