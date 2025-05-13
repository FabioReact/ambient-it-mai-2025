import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const LearnUseEffect = () => {
  const [counter, setCounter] = useState(0);
  const isFirstRenderRef = useRef(true);
  const onIncrement = () => {
    // Si la valeur future dépend de la valeur actuelle, alors il faudra toujours passer par une fonction callback
    setCounter((c) => c + 1); // asynchrone - 0 + 1 = 1
    // setCounter((c) => c + 1); // asynchrone - 1 + 1 = 2
  };

  useLayoutEffect(() => {
    // Dans un useEffect, je peux executer des effet (alias effet de bord - side effect)
    // Uniquement lors du premier rendu
    console.log('useLayoutEffect Called - []');
    // document.addEventListener('click', () => {})
    return () => {
    // document.removeEventListener('click', () => {})
      // Fonction de nettoyage - clean up function - éviter les fuites mémoires
      console.log('useLayoutEffect Clean up - []');
    };
  }, []);

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
    if (!isFirstRenderRef.current) {
      console.log('Log uniquement lors des mises à jour de compteur')
    }
    isFirstRenderRef.current = false;
    // Dans un useEffect, je peux executer des effet (alias effet de bord - side effect)
    // Lors du premier rendu ET lors de toutes les mises à jour de counter
    console.log('UseEffect Called - [counter]', counter);
    return () => {
      console.log('Clean up - [counter]', counter);
    }
  }, [counter]);

  console.log('Render du composant');

  return (
    <section>
      <h1>LearnUseEffect</h1>
      <p>Channel: {counter}</p>
      <button onClick={onIncrement}>Changer de channel</button>
    </section>
  );
};

export default LearnUseEffect;
