import { pricePlans } from "../assets/data";
import Card from "./Card";

const CardsContainer = ({ toggle }) => {
    return (
        <section className="price-plan-cards">
            {pricePlans.map(plan => {
                return (
                    <Card 
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