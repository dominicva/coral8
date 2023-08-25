import './Button.scss';

export default function Button({ active, children }) {
  return (
    <button className={`button ${active ? 'active' : ''}`}>{children}</button>
  );
}
