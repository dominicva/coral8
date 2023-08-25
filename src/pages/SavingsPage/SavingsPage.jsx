import { PieChart } from '../../components/PieChart';
import ProductCards from '../../components/ProductCard/ProductCards';
import './SavingsPage.scss';

export default function SavingsPage() {
  return (
    <div className="savings-page">
      <div className="savings-page__intro">
        <h2 className="savings-page__intro-heading">
          Introducing our new feature
        </h2>
        <p className="savings-page__intro-body">
          Unlock extra savings on energy bills by operating during the Green
          zone, freeing up funds for the things you love.
        </p>
      </div>
      <PieChart />
      <ProductCards />
    </div>
  );
}
