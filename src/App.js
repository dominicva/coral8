import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SelectedProductCard from './components/SelectedProductCard/SelectedProductCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home</h1>
              </div>
            }
          />
          <Route path="/page" element={<Page />} />
        </Routes>
        <SelectedProductCard />
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
