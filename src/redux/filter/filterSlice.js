import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    value: '',
  },

  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
export const getFilterValue = state => state.filter.value;
