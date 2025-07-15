import './Productcard.css';

export default function Productcard({ items }) {
    return (
        <div className="product-container">
            {items.map((item, index) => (
                <div className="product-card" key={index}>
                    <img className="product-image" src={item.image} alt={item.title} />
                     <div className="product-content">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-description">{item.description}</p>
                        <h3 className="product-price">${item.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
