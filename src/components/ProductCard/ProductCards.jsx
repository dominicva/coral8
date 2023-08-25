import "./ProductCards.scss";
import monthcard from "../../assets/1-month-card.png";
import monthscard from "../../assets/6-months-card.png";
import monthscards from "../../assets/12-months-cards.png";

function ProductCards() {
    return(
        <>
        <section className="ProductCards__title">
            <h1>Make a better use of your funds</h1>
        </section>
        <section className="ProductCards__container">
       <img 
            className="ProductCards"
            src={monthcard}
            alt="product"
            />
        <img 
            className="ProductCards"
            src={monthscard}
            alt="product"
            />
        <img 
            className="ProductCards"
            src={monthscards}
            alt="product"
            />
            </section>

        </>
    );
}

export default ProductCards;