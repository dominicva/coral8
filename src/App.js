import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import SavingsPage from './pages/SavingsPage/SavingsPage';
import Header from './components/Header/Header';
import { ProgressPage } from './pages/ProgressPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
