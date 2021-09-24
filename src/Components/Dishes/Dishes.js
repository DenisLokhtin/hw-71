import React from 'react';
import './Dishes.css';
import DishCard from "../../DishCard/DishCard";

const Dishes = (props) => (
    <div>
        <div className="Dish-Header">
            <h2>Dishes</h2>
            <button>Add new Dish</button>
        </div>
        <div>
            <DishCard/>
            <DishCard/>
            <DishCard/>
            <DishCard/>
        </div>
    </div>
);

export default Dishes;