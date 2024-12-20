// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';  // contactsSlice
import filtersReducer from './filters/slice';    // filtersSlice

const store = configureStore({
  reducer: {
    contacts: contactsReducer,  // Contacts slice'ını store'a ekle
    filters: filtersReducer,    // Filters slice'ını store'a ekle
  },
});

export default store;
