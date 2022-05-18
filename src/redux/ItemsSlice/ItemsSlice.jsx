import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const ItemsSlice = createSlice({
    name: 'items',
    initialState: [],
  
    reducers: {

        addItem(state, action) {
            const newContact = {
                name: action.payload.userName,
                number: action.payload.userNumber,
                id: nanoid(),
            };

            state.push(newContact);
        },
       
        deleteItem(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
       
        }
   
})

export const { addItem, deleteItem } = ItemsSlice.actions;
export default ItemsSlice;