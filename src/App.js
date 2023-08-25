import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SavingsPage from './pages/SavingsPage/SavingsPage';
import Header from './components/Header/Header';
import { ProgressPage } from './pages/ProgressPage';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<SavingsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
