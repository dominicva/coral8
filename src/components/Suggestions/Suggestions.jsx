import sun from '../../assets/sun.png';
import './Suggestions.scss';
import washingMachine from '../../assets/washing-machine.png';
import chargerIcon from '../../assets/charger-icon.png';

function Suggestions() {
  return (
    <section className="suggestions">
      <div className="suggestions__wrapper">
        <h3 className="suggestions__title">Suggestions</h3>
        <div className="suggestions__card">
          <img
            src={washingMachine}
            alt="washing machine icon"
            className="suggestions__icon"
          />
          <p className="suggestions__description">
            Do you wash clothes at night? Put the washing out before you go to
            bed around 23:30 and it'll be done in the morning!
          </p>
        </div>
        <div className="suggestions__card">
            <img src={sun} alt="sun icon" className="suggestions__icon" />
            <p className="suggestions__description">
            Let the sun do its thing! Line-dry your laundry on sunny days! Its eco-friendly and wallet friendly.
          </p>
        </div>
        <div className="suggestions__card">
        <img
            src={chargerIcon}
            alt="charger icon"
            className="suggestions__icon"
          />
          <p className="suggestions__description">
           Unplug chargers and devices when they're not in use. Even gadgets need their beauty sleep, and you'll be dreaming of the extra savings.
          </p>
       </div>
      </div>
    </section>
  );
}

export default Suggestions;
