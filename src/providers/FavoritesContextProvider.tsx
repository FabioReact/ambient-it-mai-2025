import { useState, type PropsWithChildren } from 'react';
import FavoritesContext from '../contexts/favorites-context';

const FavoritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState(['341']);

  const addFavorite = (id: string) => {
    setFavorites((favorites) => [...favorites, id]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((favorites) => favorites.filter((favorite) => favorite !== id));
  }
  
  return <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
