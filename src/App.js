import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ProductCards from './components/ProductCard/ProductCards';
import SelectedProductCard from './components/SelectedProductCard/SelectedProductCard';
import { PieChart } from './components/PieChart';
import { EnergyUsage } from './components/EnergyUsage';
import { Progress } from './components/Progress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div className="home">Home</div>} />
          <Route path="/page" element={<Page />} />
        </Routes>
        <PieChart />
        <ProductCards />
        <SelectedProductCard />
        <Progress />
        <EnergyUsage />
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
