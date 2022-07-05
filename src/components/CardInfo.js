const CardInfo = ({ storage, userCount, data }) => {
    return (
        <div className="price-plan-info">
            <p className="price-plan-storage">{storage} Storage</p>
            <p className="price-plan-users">{userCount} Users Allowed</p>
            <p className="price-plan-data">Send up to {data}</p>
        </div>
    );
}

export default CardInfo;