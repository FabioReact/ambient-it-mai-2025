import { useState } from 'react';
import { useGetHeroesByFirstLetter } from '../hooks/useGetHeroesByFirstLetter';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const { isFetching, data: heroes, refetch } = useGetHeroesByFirstLetter('A');

  const onSelectLetter = (l: string) => {
    setSelectedLetter(l);
    refetch(l);
  };

  return (
    <section>
      <h1>List of heroes</h1>
      <ul>
        {alphabet.map((letter) => (
          <li
            key={letter}
            style={selectedLetter === letter ? { color: 'red' } : undefined}
            onClick={() => onSelectLetter(letter)}
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
