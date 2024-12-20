// src/redux/contacts/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
const initialState = {
  contacts: [],
};

// Slice oluşturma
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);  // Yeni kişi ekler
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload); // Kişi silme
    },
    setContacts: (state, action) => {
      state.contacts = action.payload; // Kişi listesini ayarlama
    },
  },
});

// Export işlemleri
export const { addContact, removeContact, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
