import Counter from './components/Counter';
import { useCounter } from './hooks/useCounter';
import HeroesList from './pages/HeroesList';

function App() {
  // const { counter, increment } = useCounter()
  return (
    <>
      <h1>Vite + React</h1>
      {/* <p>Compteur: {counter}</p>
      <button onClick={increment}>Increment</button>
      <Counter /> */}
      <HeroesList />
    </>
  );
}

export default App;

// atoms, molecules, organisms
