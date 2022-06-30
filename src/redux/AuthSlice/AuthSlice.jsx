import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { authApi } from 'redux/AuthOperations/AuthOperations';
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

export const AuthSlice = createSlice({

    name: 'auth',

    initialState: initialState,
        
    extraReducers: function (builder) {
            
        builder
             .addMatcher(
                 authApi.endpoints.logIn.matchFulfilled
                 || authApi.endpoints.registration.matchFulfilled,
            (state, action) => {
                
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
      }
    )
            .addMatcher(
            authApi.endpoints.logOut.matchFulfilled,
            (state, _ ) => {
          
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            }
        )
        .addMatcher(
            authApi.endpoints.fetchCurrentUser.matchFulfilled,
            (state, action ) => {
       
            state.user = action.payload;
            state.isLoggedIn = true;
      })
    
        }
    }
);

const persistConfig = {
    key: 'auth',
    storage,
    blacklist: ['user'],
};

export const persistedAuthReducer = persistReducer(persistConfig, AuthSlice.reducer)

export const { addUser, logInUser } = AuthSlice.actions;

//Selectors for User
export const getUserName = (state) => state.auth.user.name; 
export const getIsLoggedIn = (state) => state.auth.isLoggedIn; 
export const getToken = (state) => state.auth.token;
