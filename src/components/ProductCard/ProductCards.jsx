import './ProductCards.scss';
import monthcard from '../../assets/1-month-card.png';
import monthscard from '../../assets/6-months-card.png';
import monthscards from '../../assets/12-months-cards.png';
import { Button } from '../Button';

function ProductCards() {
  return (
    <>
      <section className="ProductCards__title">
        <h1 className="ProductCards__heading">Make better use of your funds</h1>
      </section>
      <section className="ProductCards__container">
        <img className="ProductCards" src={monthcard} alt="product" />
        <img className="ProductCards" src={monthscard} alt="product" />
        <img className="ProductCards" src={monthscards} alt="product" />
      </section>
      <div className="product-cards__buttons-container">
        <Button active={true}>Select</Button>
        <Button>
          <span style={{ fontWeight: '400' }}>Customise</span>
        </Button>
      </div>
    </>
  );
}

export default ProductCards;
