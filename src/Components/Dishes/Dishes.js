import React from 'react';
import DishCard from "../../DishCard/DishCard";
import {useSelector} from "react-redux";
import './Dishes.css';

const Dishes = (props) => {
    const dishes = useSelector(state => state.dishes);

    return (
        <div>
            <div className="Dish-Header">
                <h2>Dishes</h2>
                <button>Add new Dish</button>
            </div>
            <div>
                {dishes.map((dish) => {
                    return <DishCard key={dish.id} name={dish.name} price={dish.price} img={dish.img}/>
                })}
            </div>
        </div>
    )
};

export default Dishes;