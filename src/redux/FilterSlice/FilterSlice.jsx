import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({

        name: 'filter',

    initialState: {
            filter: '',
        },
        
        reducers: {

            change(state, action) {

               state.filter = action.payload;
            }
        
        }
    }
);

export const { change } = FilterSlice.actions;
export const getFilterValue = (state) => state.filter.filter; //????????