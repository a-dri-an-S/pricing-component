import CardButton from "./CardButton";
import CardInfo from "./CardInfo";
import CardPlan from "./CardPlan";

const Card = ({ planType, monthPrice, yearPrice, toggleYear, storage, userCount, data }) => {
    return (
        <section className="price-plan-card">
            <CardPlan 
                planType={planType} 
                toggleYear={toggleYear}
                monthPrice={monthPrice}
                yearPrice={yearPrice}
            />
            <CardInfo 
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