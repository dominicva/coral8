import SelectedProductCard from '../../components/SelectedProductCard/SelectedProductCard';
import { Progress } from '../../components/Progress';
import { EnergyUsage } from '../../components/EnergyUsage';
import Suggestions from '../../components/Suggestions/Suggestions';
import './ProgressPage.scss';

export default function ProgressPage() {
  return (
    <div className="progress-page">
      <p className="progress-page__text--top">
        Great, you selected a{' '}
        <span className="progress-page__text--top bold">makeup trolley</span>
      </p>
      <SelectedProductCard />
      <Progress />
      <EnergyUsage />
      <Suggestions />
    </div>
  );
}
