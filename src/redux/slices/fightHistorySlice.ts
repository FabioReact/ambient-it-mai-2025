import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Hero } from '@/types/hero';

type FightHistory = {
  firstChallenger: Hero;
  secondChallenger: Hero;
  winner: number;
};

type FightHistoryState = FightHistory[];

// Define the initial state using that type
const initialState: FightHistoryState = [];

export const fightHistory = createSlice({
  name: 'fightHistory',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<FightHistory>) => {
      state.unshift(action.payload);
    },
    clearHistory: (state) => {
      console.log(state);
      state = [];
    },
  },
});

export const { addToHistory, clearHistory } = fightHistory.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default fightHistory.reducer;
