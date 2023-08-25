import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page from './components/Page';
import './App.scss';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Main page</h1>
              </div>
            }
          />
          <Route path="/page" element={<Page />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
