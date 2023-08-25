import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductCards from './components/ProductCard/ProductCards';
import SelectedProductCard from './components/SelectedProductCard/SelectedProductCard';
import Suggestions from './components/Suggestions/Suggestions';
import { PieChart } from './components/PieChart';
import { EnergyUsage } from './components/EnergyUsage';
import { Progress } from './components/Progress';
import SavingsPage from './pages/SavingsPage/SavingsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SavingsPage />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
