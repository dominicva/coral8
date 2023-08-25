import userIcon from '../../assets/user-icon.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <img className="header__user-icon" src={userIcon} alt="User icon" />
    </header>
  );
}
