import { configureStore } from '@reduxjs/toolkit';
import { FilterSlice } from './FilterSlice/FilterSlice';
import { contactsApi } from './ContactsSlice/ContactsSlice';

export const store = configureStore({
  reducer: {
    filter: FilterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
