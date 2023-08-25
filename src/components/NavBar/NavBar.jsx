import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/page">Other</Link>
        </li>
      </ul>
    </nav>
  );
}
