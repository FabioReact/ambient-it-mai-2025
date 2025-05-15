import HeroCard from '@/components/HeroCard';
import { Hero } from '@/types/hero';

type WinnerProps = {
  winner: Hero | null;
  reset: () => void;
};

const Winner = ({ winner, reset }: WinnerProps) => {
  if (!winner) return null;
  return (
    <div className='flex flex-col items-center gap-2'>
      <p>The winner is</p>

      <button className='button' onClick={reset}>Reset</button>
      <HeroCard hero={winner} />
    </div>
  );
};

export default Winner;
