import React from 'react';
import './DishCard.css';

const DishCard = (props) => (
    <div className="Dish-Card">
        <div className="left-div">
            <img className="img" src={props.img} alt="dish"/>
        </div>
        <span className="name"><b>{props.name}</b></span>
        <div className="right-div">
            <span><b>{props.price}</b> KGS</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
);

export default DishCard;