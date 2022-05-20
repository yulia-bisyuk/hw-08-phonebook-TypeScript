// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';


// const ItemsSlice = createSlice({
//     name: 'items',
//     initialState: {
//         items: [],
//     },
  
//     reducers: {

//         addItem(state, action) {
//             const newContact = {
//                 name: action.payload.userName,
//                 number: action.payload.userNumber,
//                 id: nanoid(),
//             };

//             state.push(newContact);
//         },
       
//         deleteItem(state, action) {
//             return state.filter(item => item.id !== action.payload);
//         },    
//     }
   
// });

// const persistConfig = {
//   key: 'items',
//   storage,
// };

// export const persistedItemsReducer = persistReducer(
//     persistConfig,
//     ItemsSlice.reducer);


// export const { addItem, deleteItem } = ItemsSlice.actions;
// export const getItemsValue = state => Object.values(state.items);
// // export default ItemsSlice;