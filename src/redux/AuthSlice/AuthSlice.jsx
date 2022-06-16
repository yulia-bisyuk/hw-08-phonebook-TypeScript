import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({

        name: 'auth',

    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        },
        
        reducers: {

            addUser(state, action) {

                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isLoggedIn = true;
            }
        
        }
    }
);

export const { addUser } = AuthSlice.actions;

//Selectors for User
export const getUserName = (state) => state.auth.user.name; 
export const getIsLoggedIn = (state) => state.auth.isLoggedIn; 