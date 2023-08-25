import { useState } from 'react';
import './ProductCards.scss';
import product1 from '../../assets/product-1.png';
import product2 from '../../assets/product-2.png';
import product3 from '../../assets/product-3.png';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function ProductCards() {
  const [active, setActive] = useState('');

  return (
    <>
      <section className="ProductCards__title">
        <h1 className="ProductCards__heading">Make better use of your funds</h1>
      </section>
      <section className="ProductCards__container">
        <img
          className={`ProductCards ${active === 'first' ? 'active' : ''}`}
          onClick={() => setActive('first')}
          src={product1}
          alt="product"
        />
        <img
          className={`ProductCards ${active === 'second' ? 'active' : ''}`}
          onClick={() => setActive('second')}
          src={product2}
          alt="product"
        />
        <img
          className={`ProductCards ${active === 'third' ? 'active' : ''}`}
          onClick={() => setActive('third')}
          src={product3}
          alt="product"
        />
      </section>
      <div className="product-cards__buttons-container">
        <Button active={true}>
          <Link
            to="/progress"
            className="product-cards__link"
            onClick={() => (window.offsetY = 0)}
          >
            Get Started
          </Link>
        </Button>
        <Button>
          <span style={{ fontWeight: '400' }}>Customise</span>
        </Button>
      </div>
    </>
  );
}

export default ProductCards;
