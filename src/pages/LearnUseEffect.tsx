import { useEffect, useState } from 'react';

const LearnUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const onIncrement = () => {
    // Si la valeur future dépend de la valeur actuelle, alors il faudra toujours passer par une fonction callback
    setCounter((c) => c + 1); // asynchrone - 0 + 1 = 1
    // setCounter((c) => c + 1); // asynchrone - 1 + 1 = 2
  };

  useEffect(() => {
    // Dans un useEffect, je peux executer des effet (alias effet de bord - side effect)
    // Uniquement lors du premier rendu
    console.log('UseEffect Called - []');
    // document.addEventListener('click', () => {})
    return () => {
    // document.removeEventListener('click', () => {})
      // Fonction de nettoyage - clean up function - éviter les fuites mémoires
      console.log('Clean up - []');
    };
  }, []);

  useEffect(() => {
    // Lors du rendu ET lors de toutes les mises à jour de counter
    console.log('UseEffect Called - [counter]', counter);
    return () => {
      console.log('Clean up - [counter]', counter);
    }
  }, [counter]);

  return (
    <section>
      <h1>LearnUseEffect</h1>
      <p>Channel: {counter}</p>
      <button onClick={onIncrement}>Changer de channel</button>
    </section>
  );
};

export default LearnUseEffect;
