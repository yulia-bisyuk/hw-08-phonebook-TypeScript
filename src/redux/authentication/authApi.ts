import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User, UserResultType, UserQueryArgs } from 'types/types';
import { RootState } from 'redux/store';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],

  endpoints: builder => ({
    registration: builder.mutation<UserResultType, UserQueryArgs>({
      query: value => ({
        url: `/users/signup`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['User'],
    }),

    logIn: builder.mutation<
      UserResultType,
      { email: string; password: string }
    >({
      query: value => ({
        url: `/users/login`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['User'],
    }),

    logOut: builder.mutation<UserResultType, string>({
      query: token => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    fetchCurrentUser: builder.query<User, string>({
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
