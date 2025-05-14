import { useFavoritesContext } from '../contexts/favorites-context';
import { useCounterContext } from '../contexts/counter-context';

const Profile = () => {
  const { favorites } = useFavoritesContext();
  const { counter, decrement, increment } = useCounterContext();
  return (
    <section>
      <h1>Profile</h1>
      <div>
        <p>List of favorites:</p>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>{favorite}</li>
          ))}
        </ul>
        <p>Counter: {counter}</p>
        <button
          onClick={() => {
            increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          Decrement
        </button>
      </div>
    </section>
  );
};

export default Profile;
