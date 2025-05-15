import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: number[] = [];

export const favoriteHeroesSlice = createSlice({
  name: 'favoriteHeroes',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<number>) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addFavorites, removeFavorites} = favoriteHeroesSlice.actions;

export default favoriteHeroesSlice.reducer;
