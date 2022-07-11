import { pricePlans } from "../assets/data";
import Card from "./Card";
import "../styles/CardsContainer.css";

const CardsContainer = ({ toggle }) => {
    return (
        <section className="price-plan-cards">
            {pricePlans.map((plan) => {
                return (
                    <Card
                        key={plan.type}
                        planType={plan.type}
                        toggleYear={toggle}
                        monthPrice={plan.monthPrice}
                        yearPrice={plan.yearPrice}
                        storage={plan.storage}
                        userCount={plan.userCount}
                        data={plan.dataSend}
                    />
                )
            })}
        </section>
    );
}

export default CardsContainer;