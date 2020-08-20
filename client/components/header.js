import Link from 'next/link';

const header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign up', href: '/auth/signup' },
    !currentUser && { label: 'Sign in', href: '/auth/signin' },
    currentUser && { label: 'Sign out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>
      <div className="d-flex">
        <ul className="nav d-flex align-items-center">
          {links}
          {currentUser && currentUser.email && (
            <li key={currentUser.email} className="nav-item">
              {currentUser.email}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default header;
