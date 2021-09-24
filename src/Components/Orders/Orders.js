import React from 'react';
import OrderCard from "../OrderCard/OrderCard";
import {useSelector} from "react-redux";
import './Orders.css';

const Orders = (props) => {
    const orders = useSelector(state => state.orders);

    return (
        <div>
            <div>
                <h2>Orders</h2>
            </div>
            <div>
                {orders.map((order) => {
                    return <OrderCard key={order.id} order={order}/>
                })}
            </div>
        </div>
    )
};

export default Orders;