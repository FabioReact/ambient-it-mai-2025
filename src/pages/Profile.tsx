import { useFavoritesContext } from '../contexts/favorites-context';
import { useCounterContext } from '../contexts/counter-context';
import { useAuthContext } from '@/contexts/auth-context';

const Profile = () => {
  const { favorites } = useFavoritesContext();
  const { email, id, accessToken } = useAuthContext();
  const { counter, decrement, increment } = useCounterContext();
  return (
    <section>
      <h1>Profile</h1>
      <div>
        <p>Email: {email}</p>
        <p>id: {id}</p>
        <p>Token: {accessToken}</p>
      </div>
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
