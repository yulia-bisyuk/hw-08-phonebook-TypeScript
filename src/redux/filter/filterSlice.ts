import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type FilterState = {
  value: string;
};

export const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    value: '',
  } as FilterState,

  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
export const getFilterValue = (state: RootState) => state.filter.value;
