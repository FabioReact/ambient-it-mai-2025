import { useRef } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter();
  const countriesRef = useRef(['France', 'Spain', 'Germany']);
  console.log(countriesRef.current);

  return (
    <section>
      <h1>Counter 2: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        {countriesRef.current.map((country) => (
          <p key={country}>{country}</p>
        ))}
        <button onClick={() => {
          countriesRef.current.push('Italy');
          console.log(countriesRef.current);
        }}>Add Italy</button>
      </div>
    </section>
  );
};

export default Counter;
