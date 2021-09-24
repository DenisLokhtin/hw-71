import React from 'react';
import DishCard from "../../DishCard/DishCard";
import {useSelector} from "react-redux";
import './Dishes.css';
import AxiosApi from "../../AxiosAPI";

const Dishes = (props) => {
    const dishes = useSelector(state => state.dishes);

    const deleteDish = (e) => {
        AxiosApi.delete('/dishes/' + e + '.json')
    }

    return (
        <div>
            <div className="Dish-Header">
                <h2>Dishes</h2>
                <button>Add new Dish</button>
            </div>
            <div>
                {dishes.map((dish) => {
                    return <DishCard delete={() => deleteDish(dish.id)} key={dish.id} name={dish.name} price={dish.price} img={dish.img}/>
                })}
            </div>
        </div>
    )
};

export default Dishes;