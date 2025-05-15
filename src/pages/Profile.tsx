import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearHistory } from '@/redux/slices/fightHistorySlice';

const Profile = () => {
  const favorites = useAppSelector((state) => state.favoriteHeroes);
  const fightHistory = useAppSelector((state) => state.fightHistory);
  const { accessToken, id, email } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <section>
      <h1>Profile</h1>
      <div>
        <p>Email: {email}</p>
        <p>id: {id}</p>
        <p>Token: {accessToken}</p>
      </div>
      <div>
        <h2>List of favorites:</h2>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>{favorite}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>History of fights:</h2>
        <button onClick={() => dispatch(clearHistory())}>Clear history</button>
        <ul>
          {fightHistory.map((fight, index) => (
            <li key={index}>
              <span
                className={
                  fight.winner === fight.firstChallenger.id ? 'text-green-600' : 'text-red-600'
                }
              >
                {fight.firstChallenger.name}
              </span>
              vs
              <span
                className={
                  fight.winner === fight.secondChallenger.id ? 'text-green-600' : 'text-red-600'
                }
              >
                {fight.secondChallenger.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
