import { configureStore } from '@reduxjs/toolkit';
import { FilterSlice } from './FilterSlice/FilterSlice';
import { contactsApi } from './ContactsOperations/ContactsOperations';
import { authApi } from './AuthOperations/AuthOperations';

export const store = configureStore({
  reducer: {
    filter: FilterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware, authApi.middleware),
});
