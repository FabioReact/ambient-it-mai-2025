import { createContext, useContext } from "react";

type FavoritesContextType = {
    favorites: string[],
    addFavorite: (id: string) => void,
    removeFavorite: (id: string) => void
}

const FavoritesContext = createContext<FavoritesContextType>(null!);

export const useFavoritesContext = () => useContext(FavoritesContext);

export default FavoritesContext;