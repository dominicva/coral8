import pieChart from '../../assets/pie-chart.svg';
import greenLegendCircle from '../../assets/green-legend-circle.svg';
import redLegendCircle from '../../assets/red-legend-circle.svg';

import './PieChart.scss';

export default function PieChart() {
  return (
    <article className="pie__article">
      <img src={pieChart} alt="PieChart" />
      <div className="pie__zones-container">
        <div className="pie__zone-container">
          <img src={greenLegendCircle} alt="Green Legend Circle" />
          <div>
            <p>Green time</p>
            <p>23:30 - 05:30</p>
          </div>
        </div>
        <div className="pie__zone-container">
          <img src={redLegendCircle} alt="Red Legend Circle" />
          <div>
            <p>Red zone</p>
            <p>05:30 - 23:30</p>
          </div>
        </div>
      </div>
    </article>
  );
}
