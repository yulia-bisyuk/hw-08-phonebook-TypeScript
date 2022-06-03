import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    
    baseQuery: fetchBaseQuery({ baseUrl: 'https://628d297da3fd714fd04044bf.mockapi.io/api/v1/' }),
    tagTypes: ['Contact'],

    endpoints: (build) => ({

        getContacts: build.query({
            query: () => ({ url: `contacts/` }),
            providesTags: ['Contact'],
        }),

        getContactById: build.query({
            query: (id) => `/contacts/${id}`,
        providesTags: ['Contact'],
        }),

        deleteContact: build.mutation({
            query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        
        addContact: build.mutation({
            query: (value) => ({
        url: `contacts/`,
        method: 'POST',
        body: value,
            }),
            invalidatesTags: ['Contact'],
        }),

        editContact: build.mutation({
            query: ({ id, ...put }) => ({
        url: `contacts/${id}`,
        method: 'PUT',
        body: put,
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
