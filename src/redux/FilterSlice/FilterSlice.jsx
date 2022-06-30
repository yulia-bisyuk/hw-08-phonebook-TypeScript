import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({

        name: 'filter',

    initialState: {
        value: '',
        },
        
        reducers: {

            change(state, action) {

               state.value = action.payload;
            }
        
        }
    }
);

export const { change } = FilterSlice.actions;
export const getFilterValue = (state) => state.filter.value; 