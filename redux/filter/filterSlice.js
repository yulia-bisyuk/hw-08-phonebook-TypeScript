"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterValue = exports.change = exports.filterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.filterSlice = (0, toolkit_1.createSlice)({
    name: 'filter',
    initialState: {
        value: '',
    },
    reducers: {
        change(state, action) {
            state.value = action.payload;
        },
    },
});
exports.change = exports.filterSlice.actions.change;
const getFilterValue = (state) => state.filter.value;
exports.getFilterValue = getFilterValue;
