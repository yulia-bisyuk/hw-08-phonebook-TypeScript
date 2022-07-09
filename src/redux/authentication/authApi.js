import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
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

export const {
  useRegistrationMutation,
  useLogInMutation,
  useLogOutMutation,
  useFetchCurrentUserQuery,
} = authApi;
