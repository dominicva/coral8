import { useState } from 'react';
import { Button } from '../Button';
import barChartWeek from '../../assets/bar-chart-week.png';
import barChartMonth from '../../assets/bar-chart-month.png';
import './EnergyUsage.scss';

export default function EnergyUsage() {
  const [active, setActive] = useState('week');

  return (
    <article className="energy-usage">
      <div className="energy-usage__buttons-container">
        <Button active={active === 'week'} onClick={() => setActive('week')}>
          Week
        </Button>
        <Button active={active === 'month'} onClick={() => setActive('month')}>
          Month
        </Button>
      </div>
      <div className="energy-usage__card">
        <h2 className="energy-usage__heading">Your energy usage</h2>
        {active === 'week' ? (
          <img src={barChartWeek} alt="bar chart" />
        ) : (
          <img src={barChartMonth} alt="bar chart" />
        )}
        <div style={{ textAlign: 'center' }}>Bar chart goes here</div>
      </div>
    </article>
  );
}
