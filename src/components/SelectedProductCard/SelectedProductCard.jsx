import selectedProduct from '../../assets/selected-product.png';
import './SelectedProductCard.scss';

function SelectedProductCard() {
  return (
    <img
      src={selectedProduct}
      alt="selected product"
      className="selected-product-card"
    />
  );
}

export default SelectedProductCard;
