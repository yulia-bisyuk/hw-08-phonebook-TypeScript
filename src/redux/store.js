import { configureStore } from '@reduxjs/toolkit';
import ContactsSlice from 'redux/ContactsSlice/ContactsSlice';
// import { persistedItemsReducer } from './ItemsSlice/ItemsSlice';

import {
  //   persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// export const persistor = persistStore(store);
