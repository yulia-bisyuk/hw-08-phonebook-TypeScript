"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditContactMutation = exports.useAddContactMutation = exports.useDeleteContactMutation = exports.useGetContactByIdQuery = exports.useGetContactsQuery = exports.contactsApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.contactsApi = (0, react_1.createApi)({
    reducerPath: 'contactsApi',
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
    tagTypes: ['Contact'],
    endpoints: build => ({
        addContact: build.mutation({
            query: (_a) => {
                var { token } = _a, value = __rest(_a, ["token"]);
                return ({
                    url: `/contacts`,
                    method: 'POST',
                    body: value,
                });
            },
            invalidatesTags: ['Contact'],
        }),
        getContacts: build.query({
            query: token => ({ url: `/contacts` }),
            providesTags: ['Contact'],
        }),
        getContactById: build.query({
            query: id => `/contacts/${id}`,
            providesTags: ['Contact'],
        }),
        deleteContact: build.mutation({
            query: ({ contactId }) => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        editContact: build.mutation({
            query: (_a) => {
                var { contactId, token } = _a, patch = __rest(_a, ["contactId", "token"]);
                return ({
                    url: `contacts/${contactId}`,
                    method: 'PATCH',
                    body: patch,
                });
            },
            invalidatesTags: ['Contact'],
        }),
    }),
});
exports.useGetContactsQuery = exports.contactsApi.useGetContactsQuery, exports.useGetContactByIdQuery = exports.contactsApi.useGetContactByIdQuery, exports.useDeleteContactMutation = exports.contactsApi.useDeleteContactMutation, exports.useAddContactMutation = exports.contactsApi.useAddContactMutation, exports.useEditContactMutation = exports.contactsApi.useEditContactMutation;
