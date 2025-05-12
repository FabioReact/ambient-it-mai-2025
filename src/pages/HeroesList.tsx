import { useEffect, useState } from 'react';
import type { Hero } from '../types/hero';
import { getHeroesByFirstLetter } from '../api/heroes';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [isFetching, setIsFetching] = useState(true);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  // Fonction pure
  // Pour un input donné, toujours le même output en sortie
  // No side effect - pas d'effet de bord

  useEffect(() => {
    let controller: AbortController;
    setIsFetching(true);
    getHeroesByFirstLetter(selectedLetter)
      .then(({ data, controller: ctrl }) => {
        setHeroes(data);
        controller = ctrl;
      })
      .catch((e) => {
        console.error(e);
    }).finally(() => {
        setIsFetching(false);
      });
    return () => {
      controller?.abort();
    };
  }, [selectedLetter]);

  return (
    <section>
      <h1>List of heroes</h1>
      <ul>
        {alphabet.map((letter) => (
          <li
            key={letter}
            style={selectedLetter === letter ? { color: 'red' } : undefined}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <div>
        <h2>Results</h2>
        {isFetching && <p>Loading...</p>}
        {!isFetching && (
          <ul>
            {heroes.map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HeroesList;
