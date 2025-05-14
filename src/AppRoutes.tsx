import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import HeroesList from './pages/HeroesList';
import Layout from './hoc/Layout';
import HeroDetails from './pages/HeroDetails';
import LearnUseEffect from './pages/LearnUseEffect';
import Counter from './components/Counter';
import Login from './pages/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/heroes' element={<HeroesList />} />
        <Route path='/heroes/:id' element={<HeroDetails />} />
        <Route path='/useEffect' element={<LearnUseEffect />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
