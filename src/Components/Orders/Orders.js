import React from 'react';
import OrderCard from "../OrderCard/OrderCard";
import {useSelector} from "react-redux";
import './Orders.css';
import AxiosApi from "../../AxiosAPI";

const Orders = (props) => {
    const orders = useSelector(state => state.orders);

    const completeOrders = (e) => {
        AxiosApi.delete('/orders/' + e + '.json')
    }

    return (
        <div>
            <div>
                <h2>Orders</h2>
            </div>
            <div>
                {orders.map((order) => {
                    return <OrderCard complete={() => completeOrders(order.id)} key={order.id} order={order}/>
                })}
            </div>
        </div>
    )
};

export default Orders;