import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
    }),
    tagTypes: ['Contact'],

    endpoints: (build) => ({

         addContact: build.mutation({
            query: ({token, ...value}) => ({
        url: `/contacts`,
        method: 'POST',
        body: value,
            }),
            invalidatesTags: ['Contact'],
        }),

        getContacts: build.query({
            query: (token) => ({ url: `/contacts` }),
            providesTags: ['Contact'],
        }),

        getContactById: build.query({
            query: (id) => `/contacts/${id}`,
        providesTags: ['Contact'],
        }),

        deleteContact: build.mutation({
            query: ({contactId, token}) => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),

        editContact: build.mutation({
            query: ({ contactId, token, ...patch }) => ({
        url: `contacts/${contactId}`,
        method: 'PATCH',
        body: patch,
            }),
            invalidatesTags: ['Contact'],
        }),
         }),
    });

export const {
    useGetContactsQuery,
    useGetContactByIdQuery,
    useDeleteContactMutation,
    useAddContactMutation,
    useEditContactMutation,
} = contactsApi;
