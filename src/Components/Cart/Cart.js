import React, {useState} from 'react';
import './Cart.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../Store/actions/cartAction";
import Modal from "../Modal/Modal";

const Cart = (props) => {
    const cart = useSelector(state => state.cart.cart);
    const cartProducts = [];
    let total = 0;
    const deliveryPrice = 150;
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const modal = () => {
        if (showModal) {
            return <Modal total={total} delivery={deliveryPrice} close={() => setShowModal(false)}/>
        }
    };


    for (const [key, value] of Object.entries(cart)) {
        cartProducts.push({
            name: key,
            count: value.count,
            price: value.price,
        });
        total += value.count * value.price
    }

    return (
        <div className="cart">
            <div className="order">
                {cartProducts.map((product, index) => (
                    <p key={index}>{product.name} <span> {product.price * product.count} Cом </span>
                        <span>{product.count}X &ensp;</span>
                        <button onClick={() => dispatch(deleteProduct(product.name, product.price, index))}> Delete</button>
                    </p>
                ))}
            </div>
            <div>
                <p>доставка: <span>{deliveryPrice} сом</span></p>
                <p>итого: <span>{cartProducts.length === 150 ? 0 : total + deliveryPrice } сом</span></p>
            </div>
            <div className="order-btn">
                <button onClick={() => setShowModal(true)} disabled={cartProducts.length === 0}>Оформить заказ</button>
            </div>
            {modal()}
        </div>
    )
};

export default Cart;