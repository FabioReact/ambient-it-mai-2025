import React, { useRef, useState } from 'react';
import type { Hero } from '../types/hero';
import { fight } from '../utils/fight';
import { useQuery } from '@tanstack/react-query';
import { getHeroesByName } from '../api/heroes';
import HeroCard from '../components/HeroCard';

type SelectHeroPros = {
  label: string;
  onSelectHero: (hero: Hero | null) => void;
};

const SelectHero = ({ label, onSelectHero }: SelectHeroPros) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  //   useQuery({
  //     queryKey: ['heroes', label, inputRef.current?.value],
  //     queryFn: () => getHeroesByName()
  //   })

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const heroName = inputRef.current!.value;
    const data = await getHeroesByName(heroName);
    if (data) {
      setHeroes(data);
    }
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor={label}>Select {label} Hero</label>
          <input ref={inputRef} type='text' id={label} name={label} />
        </fieldset>
        <button>Search</button>
      </form>
      <div className='flex flex-col gap-2'>
        {!selectedHero &&
          heroes.map((hero) => (
            <button
            className='border border-black rounded px-2 py-1 hover:bg-slate-100 cursor-pointer'
              onClick={() => {
                onSelectHero(hero);
                setSelectedHero(hero);
              }}
              key={hero.id}
            >
              <span className='text-gray-600 text-base'># {hero.id}</span> - {hero.name}
            </button>
          ))}
        {selectedHero && <HeroCard hero={selectedHero} />}
      </div>
    </section>
  );
};

// Props drilling

const Battle = () => {
  const [firstHero, setFirstHero] = useState<Hero | null>(null);
  const [secondHero, setSecondHero] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);
  return (
    <section>
      <h1>Battle</h1>
      {!winner && (
        <div className='flex justify-center gap-8'>
          <SelectHero label='first' onSelectHero={setFirstHero} />
          <SelectHero label='second' onSelectHero={setSecondHero} />
        </div>
      )}
      {firstHero && secondHero && !winner && (
        <button
          onClick={() => {
            const result = fight(firstHero, secondHero);
            setWinner(result);
          }}
        >
          Start Battle
        </button>
      )}
      {winner && (
        <div className='flex flex-col items-center gap-2'>
            <p>The winner is</p>
          
          <button
            onClick={() => {
              setWinner(null);
              setFirstHero(null);
              setSecondHero(null);
            }}
          >
            Reset
          </button>
          <HeroCard hero={winner} />
        </div>
      )}
    </section>
  );
};

export default Battle;
