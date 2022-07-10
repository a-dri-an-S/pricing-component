import CardButton from "./CardButton";
import CardInfo from "./CardInfo";
import CardPlan from "./CardPlan";

import "../styles/Card.css";

const Card = ({ planType, monthPrice, yearPrice, toggleYear, storage, userCount, data }) => {
    return (
        <section className={`price-plan-card ${planType}-card`}>
            <CardPlan 
                planType={planType} 
                toggleYear={toggleYear}
                monthPrice={monthPrice}
                yearPrice={yearPrice}
            />
            <CardInfo 
                planType={planType} 
                storage={storage}
                userCount={userCount}
                data={data}
            />
            <CardButton 
                planType={planType}
            />
        </section>
    );
}

export default Card;