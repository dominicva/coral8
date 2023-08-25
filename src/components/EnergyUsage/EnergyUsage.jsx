import { Button } from '../Button';
import './EnergyUsage.scss';

export default function EnergyUsage() {
  return (
    <article className="energy-usage">
      <div className="energy-usage__buttons-container">
        <Button active={true}>Week</Button>
        <Button>Month</Button>
      </div>
      <div className="energy-usage__card">
        <h2 className="energy-usage__heading">Your energy usage</h2>
        <div style={{ textAlign: 'center' }}>Bar chart goes here</div>
      </div>
    </article>
  );
}
