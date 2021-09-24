import React from 'react';
import './OrderCard.css'

const OrderCard = (props) => {
    const names = () => {
        const ordersId = Object.keys(props.order);
        return ordersId.map((order, index) => {
            if (order !== 'id') {
                return <p key={index}>{order}</p>
            }
        })
    }

    const value = () => {
        const ordersId = Object.values(props.order);
        return ordersId.map((value, index) => {
            if (!isNaN(value)) {
                return <p key={index}>{value}X &emsp;</p>
            }
        })
    }

    return (
        <div className="Order-Card">
            <div>
                <div>
                    {value()}
                </div>
                <div>
                    {names()}
                </div>
            </div>
            <div>
                <p><b>150 KGS</b></p>
                <p><b>150 KGS</b></p>
                <p><b>150 KGS</b></p>
            </div>
            <div>
                <p>Order Total:</p>
                <p>delivery: 150</p>
                <p><b>680 KGS</b></p>
                <button>Complete Order</button>
            </div>
        </div>
    )
};

export default OrderCard;