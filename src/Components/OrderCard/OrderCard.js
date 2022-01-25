import React from 'react';
import './OrderCard.css'

const OrderCard = (props) => {
    const names = () => {
        const ordersId = Object.keys(props.order);
        return ordersId.map((order, index) => {
            return <p key={index}>{order}</p>
        })
    };

    const ordersId = Object.values(props.order);

    const value = () => {
        return ordersId.map((value, index) => {
            return <p key={index}>{value.count}X &emsp;</p>
        });
    };

    const price = () => {
        return ordersId.map((value, index) => {
            return <p key={index}>&emsp; {value.price} KGS &emsp;</p>
        });
    };

    return (
        <div  className="Order-Card">
            <div>
                <div>
                    {value()}
                </div>
                <div>
                    {names()}
                </div>
                <div>
                    {price()}
                </div>
            </div>
            <div>
                <p>Order Total:</p>
                <p>delivery: 150</p>
                <p><b>150 KGS</b></p>
                <button onClick={() => props.complete()}>Complete Order</button>
            </div>
        </div>
    )
};

export default OrderCard;