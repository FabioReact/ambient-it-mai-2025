import { NavLink, Outlet, type NavLinkRenderProps } from 'react-router';

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => (isActive ? 'text-red-600' : '')

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={getActiveClassNames}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/heroes' className={getActiveClassNames}>
              Heroes
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
