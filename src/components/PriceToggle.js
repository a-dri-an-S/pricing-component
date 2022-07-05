import "../styles/PriceToggle.css"

const PriceToggle = ({ toggleChange }) => {
    return (
        <section className="price-toggle-block">
            <p className="price-toggle-annual">Annually</p>
            <label className="price-toggle-switch">
                <input type="checkbox" onChange={toggleChange}/>
                <span className="price-toggle-slider" />
            </label>
            <p className="price-toggle-month">Monthly</p>
        </section>
    );
}

export default PriceToggle;