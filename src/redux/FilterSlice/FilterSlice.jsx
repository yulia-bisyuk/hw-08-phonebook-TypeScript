import { createSlice } from '@reduxjs/toolkit'


const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      change(state, action) {
        return state = action.payload;
    }
  },
})

export const { change } = FilterSlice.actions;
export default FilterSlice;