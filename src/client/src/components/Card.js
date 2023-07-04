const Card = ({ header, title, text, color }) => {
    const cardStyle = {
        maxWidth: '18rem',
        margin: '20px'
    };

    const headerStyle = {
        backgroundColor: color,
        color: 'white',
    };

    return (
        <div className={`card text-white ${color} mb-3`} style={cardStyle}>
            <div className="card-header" style={headerStyle}>
                {header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;