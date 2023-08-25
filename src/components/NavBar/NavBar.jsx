import navBar from '../../assets/nav-bar.svg';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <img src={navBar} alt="Nav bar" />
    </nav>
  );
}
