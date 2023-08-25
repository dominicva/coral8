import './Button.scss';

export default function Button({ active, children, onClick }) {
  return (
    <button className={`button ${active ? 'active' : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}
