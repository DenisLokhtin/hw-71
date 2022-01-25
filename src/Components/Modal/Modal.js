import React from 'react';
import './Modal.css'
import Overlay from "../UI/overlay/Overlay";
import {useDispatch, useSelector} from "react-redux";
import {setCart, setOrder} from "../../Store/actions/cartAction";

const Modal = (props) => {
    const cart = useSelector(state => state.cart.cart);
    const cartProducts = [];
    const data = {};
    const dispatch = useDispatch();

    for (const [key, value] of Object.entries(cart)) {
        cartProducts.push({
            name: key,
            count: value.count,
            price: value.price,
        });
        data[key] = value;
    }

    const submit = () => {
        props.close();
        dispatch(setOrder(data));
        dispatch(setCart({}));
    };

    return (
        <>
            <div className="ExpandPost">
                <div className="expandPost-header">
                    <h2>Order</h2>
                    <span onClick={props.close}>X</span>
                </div>
                <div className="expandPost-inner">
                    {cartProducts.map((product, index) => (
                        <p key={index}>{product.name}
                            <span>{product.count}X &ensp;</span>
                            <span>{product.price} KGS &ensp;</span>
                        </p>
                    ))}
                    <p><b>Итоговая сумма:</b> {props.total + props.delivery}</p>
                    <button onClick={submit} className="btn-read">Confirm</button>
                </div>
            </div>
            <Overlay/>
        </>
    )
};

export default Modal;