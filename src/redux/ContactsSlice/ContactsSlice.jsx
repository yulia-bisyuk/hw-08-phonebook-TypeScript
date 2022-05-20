import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const ContactsSlice = createSlice({

        name: 'contacts',

        initialState: {
      
                items: [],
                filter: '',
               
        },
        
        reducers: {

            addItem(state, action) {
                const newContact = {
                    name: action.payload.userName,
                    number: action.payload.userNumber,
                    id: nanoid(),
                };

                 state.items.push(newContact);
            },

            deleteItem(state, action) {

                return state.items.filter(item => item.id !== action.payload);
            },

            changeFilter(state, action) {

                return state.filter = action.payload;
            }
        
        }
    }
);

export const { addItem, deleteItem, changeFilter } = ContactsSlice.actions;
export default ContactsSlice;
export const getFilterValue = (state) => state.contacts.filter;
export const getItemsValue = (state) => state.contacts.items;