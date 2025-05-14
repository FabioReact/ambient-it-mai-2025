import { useContext } from 'react'
import FavoritesContext from '../contexts/favorites-context'
import { useCounterContext } from '../contexts/counter-context';

const Profile = () => {
    const context = useContext(FavoritesContext);
    const counterContext = useCounterContext();
  return (
    <section>
        <h1>Profile</h1>
        <div>
            <p>List of favorites:</p>
            <ul>
                {context.favorites.map((favorite) => (
                    <li key={favorite}>{favorite}</li>
                ))}
            </ul>
            <p>Counter: {counterContext.counter}</p>
            <button onClick={() => {
                counterContext.increment();
            }}>Increment</button>
            <button onClick={() => {
                counterContext.decrement();
            }}>Decrement</button>
        </div>
    </section>
  )
}

export default Profile