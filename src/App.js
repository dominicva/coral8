import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page from './components/Page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home page</h1>
                <Link to="/page">Go to another page</Link>
              </div>
            }
          />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
