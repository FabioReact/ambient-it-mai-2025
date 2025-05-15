import { useAppSelector } from '@/redux/hooks';
import { NavLink, Outlet, type NavLinkRenderProps } from 'react-router';

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

// const LinkVisibility = Object.freeze({
//   PUBLIC: 'PUBLIC',
//   AUTHENTICATED: 'AUTHENTICATED',
//   NOT_AUTHENTICATED: 'NOT_AUTHENTICATED',
// })

type Link = {
  path: string;
  label: string;
  visibility: LinkVisibility;
};

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => (isActive ? 'text-red-600' : '');

const Layout = () => {
  const { connected } = useAppSelector(state => state.auth);

  const links: Link[] = [
    { path: '/', label: 'Home', visibility: LinkVisibility.PUBLIC },
    { path: '/heroes', label: 'Heroes', visibility: LinkVisibility.PUBLIC },
    { path: '/battle', label: 'Battle', visibility: LinkVisibility.PUBLIC },
    { path: '/login', label: 'Login', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { path: '/register', label: 'Register', visibility: LinkVisibility.NOT_AUTHENTICATED },
    { path: '/profile', label: 'Profile', visibility: LinkVisibility.AUTHENTICATED },
    { path: '/logout', label: 'Logout', visibility: LinkVisibility.AUTHENTICATED },
  ];

  return (
    <>
      <nav>
        <ul className='flex gap-4 justify-center'>
          {links
            .filter(
              (link) =>
                link.visibility === LinkVisibility.PUBLIC ||
                (link.visibility === LinkVisibility.AUTHENTICATED && connected) ||
                (link.visibility === LinkVisibility.NOT_AUTHENTICATED && !connected),
            )
            .map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={getActiveClassNames}>
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
