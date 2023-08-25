import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SavingsPage from './pages/SavingsPage/SavingsPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SavingsPage />} />
          <Route path="/page" element={<Page />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
