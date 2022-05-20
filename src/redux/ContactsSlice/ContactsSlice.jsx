import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

               state.items = state.items.filter(item => item.id !== action.payload);
            },

            changeFilter(state, action) {

                state.filter = action.payload;
            }
        
        }
    }
);

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
};

export const persistedContactsReducer = persistReducer(persistConfig, ContactsSlice.reducer)

export const { addItem, deleteItem, changeFilter } = ContactsSlice.actions;

export const getFilterValue = (state) => state.contacts.filter;
export const getItemsValue = (state) => state.contacts.items;