import React from 'react';
import DishCard from "../../DishCard/DishCard";
import {useDispatch, useSelector} from "react-redux";
import './Dishes.css';
import AxiosApi from "../../AxiosAPI";
import Cart from "../Cart/Cart";
import {setModalAdd} from "../../Store/actions/Action";
import {addProduct} from "../../Store/actions/cartAction";

const Dishes = (props) => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.Reducer.dishes);

    const deleteDish = (e) => {
        AxiosApi.delete('/dishes/' + e + '.json')
    };

    const print = () => {
        if (dishes) {
            return dishes.map((dish) => {
                return <DishCard add={() => dispatch(addProduct(dish.name, dish.price))}
                                 delete={() => deleteDish(dish.id)}
                                 key={dish.id} name={dish.name} price={dish.price} img={dish.img}/>
            })
        }
    };

    return (
        <div>
            <div className="Dish-Header">
                <h2>Dishes</h2>
                <button onClick={() => dispatch(setModalAdd())}>Add new Dish</button>
            </div>
            <div className='flex'>
                <div>
                    {print()}
                </div>
                <Cart/>
            </div>
        </div>
    )
};

export default Dishes;