const CardButton = ({ planType }) => {
    return (
        <button className={`price-plan-btn ${planType}-btn`}>
            Learn More
        </button>
    );
}

export default CardButton;