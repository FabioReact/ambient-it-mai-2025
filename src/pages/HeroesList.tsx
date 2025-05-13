import { useState } from 'react';
import { useGetHeroesByFirstLetter } from '../hooks/useGetHeroesByFirstLetter';
import HeroCard from '../components/HeroCard';
import { Link } from 'react-router';
import HeroSkeletonCard from '../components/skeletons/HeroCardSkeleton';

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
      <h1 className='text-center'>List of heroes</h1>
      <ul className='flex justify-center gap-2 my-6'>
        {alphabet.map((letter) => (
          <li
            key={letter}
            className={`cursor-pointer font-semibold ${selectedLetter === letter && 'text-red-500'}`}
            onClick={() => onSelectLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap justify-center gap-4'>
        {isFetching && Array.from({ length: 10 }).map((_, index) => <HeroSkeletonCard key={index} />)}
        {!isFetching && (
          heroes.map((hero) => (
            <Link key={hero.id} to={hero.id.toString()}>
              <HeroCard hero={hero} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default HeroesList;
