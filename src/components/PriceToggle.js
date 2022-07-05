const PriceToggle = ({ toggleChange }) => {

    return (
        <section className="price-toggle-block">
            <p className="price-toggle-annual">Annually</p>
            <label class="switch">
                <input type="checkbox" onChange={toggleChange}/>
                <span class="slider" />
            </label>
            <p className="price-toggle-month">Monthly</p>
        </section>
    );
}

export default PriceToggle;