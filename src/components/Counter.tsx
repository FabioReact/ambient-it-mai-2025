import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <section>
      <h1>Counter 2: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </section>
  );
};

export default Counter;
