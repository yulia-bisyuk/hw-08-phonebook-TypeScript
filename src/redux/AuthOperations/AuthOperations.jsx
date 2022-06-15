import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
//записати в стейт нового юзера і спробувати знов
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
//          prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token
//              console.log(token);
             
//     // If we have a token set in state, let's assume that we should be passing it.
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`)
//     }
//     return headers
//   },
    }),
    tagTypes: ['User'],

    endpoints: (build) => ({

        createUser: build.mutation({
            query: (value) => ({
        url: `/users/signup`,
        method: 'POST',
        body: value,
            }),
            invalidatesTags: ['User'],
        }),

        }),
    });

export const {
    useCreateUserMutation,
} = authApi;
