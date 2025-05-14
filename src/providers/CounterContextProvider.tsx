import type { PropsWithChildren } from 'react';
import CounterContext from '../contexts/counter-context';
import { useCounter } from '../hooks/useCounter';

const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const { counter, increment, decrement } = useCounter();

  return (
    <CounterContext.Provider
      value={{
        counter: counter,
        increment: increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContextProvider };
