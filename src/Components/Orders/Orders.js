import React from 'react';
import OrderCard from "../OrderCard/OrderCard";
import {useSelector} from "react-redux";
import './Orders.css';
import AxiosApi from "../../AxiosAPI";

const Orders = (props) => {
    const orders = useSelector(state => state.Reducer.orders);

    const completeOrders = (e) => {
        AxiosApi.delete('/orders/' + e + '.json')
    };

    return (
        <div>
            <div>
                <h2>Orders</h2>
            </div>
            <div>
                {orders.map((order, index) => {
                    return <OrderCard complete={() => completeOrders(order.id)} key={index} order={order}/>
                })}
            </div>
        </div>
    )
};

export default Orders;