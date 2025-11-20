import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      console.log("inside add favorite")
      const exists = state.favorites.find((s) => s.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
      console.log(action.payload)
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (s) => s.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
