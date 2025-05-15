import { getHeroesByName } from '@/api/heroes';
import { Hero } from '@/types/hero';
import { useRef, useState } from 'react';

type SelectHeroPros = {
  label: string;
  onSelectHero: (hero: Hero | null) => void;
};

const SelectHero = ({ label, onSelectHero }: SelectHeroPros) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

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
        <button className='button'>Search</button>
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
      </div>
    </section>
  );
};

export default SelectHero;
