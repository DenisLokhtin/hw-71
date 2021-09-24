import React from 'react';
import './Orders.css';
import OrderCard from "../OrderCard/OrderCard";

const Orders = (props) => (
    <div>
        <div>
            <h2>Orders</h2>
        </div>
        <div>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>
    </div>
);

export default Orders;