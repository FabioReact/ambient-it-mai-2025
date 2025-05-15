import { useState } from 'react';
import { Swords } from 'lucide-react';
import type { Hero } from '@/types/hero';
import { fight } from '@/utils/fight';
import HeroCard from '@/components/HeroCard';
import SelectHero from './SelectHero';
import Winner from './Winner';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToHistory } from '@/redux/slices/fightHistorySlice';

const Battle = () => {
  const [firstHero, setFirstHero] = useState<Hero | null>(null);
  const [secondHero, setSecondHero] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);
  const { connected } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (

      <section>
        <h1>Battle</h1>
        {!winner && (
          <div className='flex justify-center gap-8'>
            {firstHero && <HeroCard hero={firstHero} />}
            {!firstHero && <SelectHero label='first' onSelectHero={setFirstHero} />}
            {!secondHero && <SelectHero label='second' onSelectHero={setSecondHero} />}
            {firstHero && secondHero && (
              <button
                className='text-white bg-red-600 px-2 py-1 cursor-pointer h-10 rounded-full'
                onClick={() => {
                  const result = fight(firstHero, secondHero);
                  if (connected) {
                    dispatch(
                      addToHistory({
                        firstChallenger: firstHero,
                        secondChallenger: secondHero,
                        winner: result.id,
                      }),
                    );
                  }
                  setWinner(result);
                }}
              >
                <Swords />
              </button>
            )}
            {secondHero && <HeroCard hero={secondHero} />}
          </div>
        )}
        <Winner
          winner={winner}
          reset={() => {
            setWinner(null);
            setFirstHero(null);
            setSecondHero(null);
          }}
        />
      </section>
  );
};

export default Battle;