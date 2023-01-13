"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const filterSlice_1 = require("./filter/filterSlice");
const contactsApi_1 = require("./contacts/contactsApi");
const authApi_1 = require("./authentication/authApi");
const authSlice_1 = require("./authentication/authSlice");
const redux_persist_1 = require("redux-persist");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        filter: filterSlice_1.filterSlice.reducer,
        [contactsApi_1.contactsApi.reducerPath]: contactsApi_1.contactsApi.reducer,
        [authApi_1.authApi.reducerPath]: authApi_1.authApi.reducer,
        auth: authSlice_1.persistedAuthReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
            },
        }).concat(contactsApi_1.contactsApi.middleware, authApi_1.authApi.middleware);
    },
});
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);
