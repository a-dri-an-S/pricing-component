import "../styles/CardPlan.css";

const CardPlan = ({ planType, monthPrice, yearPrice, toggleYear }) => {
    return (
        <header className={`price-plan-header ${planType}-header`}>
            <h2 className={`price-plan-type ${planType}-type`}>{planType}</h2>
            <h3 className={`price-plan-price ${planType}-price`}>
                <span className="price-plan-dollar">$</span> 
                {toggleYear ? yearPrice : monthPrice}
            </h3>
        </header>
    );
}

export default CardPlan;