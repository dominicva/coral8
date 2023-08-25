import { PieChart } from '../../components/PieChart';
import ProductCards from '../../components/ProductCard/ProductCards';
import './SavingsPage.scss';

export default function SavingsPage() {
  return (
    <div className="savings-page">
      <PieChart />
      <ProductCards />
    </div>
  );
}
