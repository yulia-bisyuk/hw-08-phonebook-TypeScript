import { configureStore } from '@reduxjs/toolkit';
import ItemsSlice from './ItemsSlice/ItemsSlice';
import FilterSlice from './FilterSlice/FilterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'items',
  storage,
};

const persistedItemsReducer = persistReducer(persistConfig, ItemsSlice.reducer);

export const store = configureStore({
  reducer: {
    items: persistedItemsReducer,
    filter: FilterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
