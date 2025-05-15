import { memo, PropsWithChildren, useCallback, useMemo, useRef, useState } from 'react';

const Title = memo(({ children }: PropsWithChildren) => {
  console.log('Render Title');
  return <h1>{children}</h1>;
});

// Mémoiser un composant
const Button = memo(({ children, onClick }: PropsWithChildren<{ onClick: () => void }>) => {
  console.log('Render Button', children);
  return <button onClick={onClick}>{children}</button>;
});

const expensiveFunction = (nb: number) => {
    let str = '';
    for (let i = 0; i < 10000000; i++) {
      str += 'a';
    }
    return (nb * 2) + 1;
}

const Optimisations = () => {
  const [nb, setNb] = useState(1);
  console.log('Render Optimisations');
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  // Mémoiser une reference
  const incrementBy = useCallback(() => {
    setCounter((c) => c + nb);
  }, [nb]);

  const decrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  // Mémoiser le résultat d'une fonction
  const result = useMemo(() => expensiveFunction(200), [nb]);

  return (
    <div>
      <Title>Optimisations</Title>
      <p>Result of Expensive compute: {result}</p>
      <p>Counter: {counter}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={incrementBy}>Increment By</Button>
      <Button onClick={decrement}>Decrement</Button>
      <fieldset>
        <label htmlFor='incrementBy'>Increment by:</label>
        <input
          type='number'
          id='incrementBy'
          onChange={(e) => setNb(Number(e.target.value))}
          value={nb}
        />
      </fieldset>
    </div>
  );
};

export default Optimisations;
