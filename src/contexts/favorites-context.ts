import { createContext } from "react";

type FavoritesContextType = {
    favorites: string[],
}

const FavoritesContext = createContext<FavoritesContextType>(null!);

export default FavoritesContext;