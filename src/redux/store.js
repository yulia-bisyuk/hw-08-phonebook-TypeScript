import { configureStore } from '@reduxjs/toolkit';
import { FilterSlice } from './FilterSlice/FilterSlice';
import { contactsApi } from './ContactsOperations/ContactsOperations';
import { authApi } from './AuthOperations/AuthOperations';
import { persistedAuthReducer } from './AuthSlice/AuthSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    filter: FilterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedAuthReducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, authApi.middleware);
  },
});

export const persistor = persistStore(store);
