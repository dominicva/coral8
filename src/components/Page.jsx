import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div>
      <h1>Another Page</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
