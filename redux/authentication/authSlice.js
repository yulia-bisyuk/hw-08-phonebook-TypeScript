"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistedAuthReducer = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const redux_persist_1 = require("redux-persist");
const authApi_1 = require("redux/authentication/authApi");
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const initialState = {
    user: { name: null, email: null },
    token: '',
    isLoggedIn: false,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addMatcher(authApi_1.authApi.endpoints.logIn.matchFulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addMatcher(authApi_1.authApi.endpoints.registration.matchFulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
            .addMatcher(authApi_1.authApi.endpoints.logOut.matchFulfilled, (state, _) => {
            state.user = { name: null, email: null };
            state.token = '';
            state.isLoggedIn = false;
        })
            .addMatcher(authApi_1.authApi.endpoints.fetchCurrentUser.matchFulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        });
    },
});
const persistConfig = {
    key: 'auth',
    storage: storage_1.default,
    blacklist: ['user'],
};
exports.persistedAuthReducer = (0, redux_persist_1.persistReducer)(persistConfig, exports.authSlice.reducer);
