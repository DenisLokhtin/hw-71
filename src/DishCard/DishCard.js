import React from 'react';
import './DishCard.css';

const DishCard = (props) => (
    <div className="Dish-Card">
        <div className="left-div">
            <img className="img" src="https://rb.ru/media/upload_tmp/43698072_358002605007163_7117367642860805032_n.jpg" alt="dish"/>
        </div>
        <span className="name"><b>Name</b></span>
        <div className="right-div">
            <span><b>Price</b> KGS</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
);

export default DishCard;