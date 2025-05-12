import { useEffect, useState } from 'react';
import { getHeroesByFirstLetter } from '../api/heroes';
import type { Hero } from '../types/hero';

export const useGetHeroesByFirstLetter = (letter: string) => {
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  // Fonction pure
  // Pour un input donné, toujours le même output en sortie
  // No side effect - pas d'effet de bord

  const refetch = (letter: string) => {
    setIsFetching(true);
    setIsError(false);
    getHeroesByFirstLetter(letter)
      .then(({ data }) => {
        setHeroes(data);
      })
      .catch((e) => {
        console.error(e);
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    refetch(letter)
  }, []);



  return {
    data: heroes,
    isFetching,
    refetch,
    isError,
  };
};
