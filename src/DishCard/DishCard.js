import React, {useState} from 'react';
import './DishCard.css';
import ModalChange from "../Components/UI/ModalChange/ModalChange";

const DishCard = (props) => {
    const [modalChangeShown, setModalChangeShown] = useState(false);

    const modalChange = () => {
        if (modalChangeShown) {
            return <ModalChange close={() => setModalChangeShown(!modalChangeShown)}/>
        }
    };

    return (
        <div className="Dish-Card">
            {modalChange()}
            <div className="left-div">
                <img className="img" src={props.img} alt="dish"/>
            </div>
            <span className="name"><b>{props.name}</b></span>
            <div className="right-div">
                <span><b>{props.price}</b> KGS</span>
                <button onClick={() => setModalChangeShown(!modalChangeShown)}>Edit</button>
                <button onClick={(e) => props.delete()}>Delete</button>
                <button onClick={() => props.add()}>Add to cart</button>
            </div>
        </div>
    )
};

export default DishCard;