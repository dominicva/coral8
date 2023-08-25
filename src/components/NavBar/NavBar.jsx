import navBar from '../../assets/nav-bar.svg';

export default function NavBar() {
  return (
    <nav className="nav">
      <img className="nav__nav-bar" src={navBar} alt="Nav bar" />
    </nav>
  );
}
