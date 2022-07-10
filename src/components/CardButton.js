import "../styles/CardButton.css";

const CardButton = ({ planType }) => {
    return (
        <button className={`price-plan-btn ${planType}-btn`}>
            LEARN MORE
        </button>
    );
}

export default CardButton;