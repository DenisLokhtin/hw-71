import React from 'react';
import './OrderCard.css'

const OrderCard = (props) => (
    <div className="Order-Card">
        <div>
            <p>1X Pepperoni pizza</p>
            <p>1X Cola</p>
            <p>Delivery</p>
        </div>
        <div>
            <p><b>450 KGS</b></p>
            <p><b>80 KGS</b></p>
            <p><b>150 KGS</b></p>
        </div>
        <div>
            <p>Order Total:</p>
            <p><b>680 KGS</b></p>
            <button>Complete Order</button>
        </div>
    </div>
);

export default OrderCard;