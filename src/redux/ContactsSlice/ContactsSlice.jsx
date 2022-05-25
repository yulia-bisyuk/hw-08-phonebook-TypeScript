import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    
    baseQuery: fetchBaseQuery({ baseUrl: 'https://628d297da3fd714fd04044bf.mockapi.io/api/v1/' }),
    tagTypes: ['Contact'],

    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `contacts/`,
        }),
        providesTags: ['Contact']
    }),

});

export const { useGetContactsQuery } = contactsApi;


// export const { addItem, deleteItem } = ItemsSlice.actions;
