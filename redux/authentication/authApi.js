"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchCurrentUserQuery = exports.useLogOutMutation = exports.useLogInMutation = exports.useRegistrationMutation = exports.authApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.authApi = (0, react_1.createApi)({
    reducerPath: 'authApi',
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        registration: builder.mutation({
            query: value => ({
                url: `/users/signup`,
                method: 'POST',
                body: value,
            }),
            invalidatesTags: ['User'],
        }),
        logIn: builder.mutation({
            query: value => ({
                url: `/users/login`,
                method: 'POST',
                body: value,
            }),
            invalidatesTags: ['User'],
        }),
        logOut: builder.mutation({
            query: token => ({
                url: `/users/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        fetchCurrentUser: builder.query({
            query: token => ({ url: `users/current` }),
            providesTags: ['User'],
        }),
    }),
});
exports.useRegistrationMutation = exports.authApi.useRegistrationMutation, exports.useLogInMutation = exports.authApi.useLogInMutation, exports.useLogOutMutation = exports.authApi.useLogOutMutation, exports.useFetchCurrentUserQuery = exports.authApi.useFetchCurrentUserQuery;
