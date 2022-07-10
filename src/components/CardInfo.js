import "../styles/CardInfo.css"

const CardInfo = ({ planType, storage, userCount, data }) => {
    return (
        <div className={`price-plan-info ${planType}`}>
            <hr className={`price-plan-line ${planType}-line`}/>
            <p className="price-plan-storage">{storage} Storage</p>
            <hr className={`price-plan-line ${planType}-line`}/>
            <p className="price-plan-users">{userCount} Users Allowed</p>
            <hr className={`price-plan-line ${planType}-line`}/>
            <p className="price-plan-data">Send up to {data}</p>
            <hr className={`price-plan-line ${planType}-line`}/>
        </div>
    );
}

export default CardInfo;