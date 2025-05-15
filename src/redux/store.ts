import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import favoriteHeroesReducer from './slices/favoritesSlice'
import fightHistoryReducer from './slices/fightHistorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favoriteHeroes: favoriteHeroesReducer,
    fightHistory: fightHistoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch