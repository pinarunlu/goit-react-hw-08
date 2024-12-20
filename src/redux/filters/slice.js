// src/redux/filters/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Başlangıç durumu
const initialState = {
  searchQuery: '',
};

// Slice oluşturma
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;  // Arama sorgusunu ayarlama
    },
  },
});

// Export işlemleri
export const { setSearchQuery } = filtersSlice.actions;
export default filtersSlice.reducer;
