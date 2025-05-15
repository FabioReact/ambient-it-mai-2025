import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import favoriteHeroesReducer from './slices/favoritesSlice'
import fightHistoryReducer from './slices/fightHistorySlice'
import { heroesApi } from './services/heroes'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favoriteHeroes: favoriteHeroesReducer,
    fightHistory: fightHistoryReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch