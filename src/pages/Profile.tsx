import { useAppSelector } from '@/redux/hooks';

const Profile = () => {
  const favorites = useAppSelector(state => state.favoriteHeroes)
  const { accessToken, id, email } = useAppSelector(state => state.auth);
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
      </div>
    </section>
  );
};

export default Profile;
