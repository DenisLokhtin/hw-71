import React from 'react';
import DishCard from "../../DishCard/DishCard";
import {useDispatch, useSelector} from "react-redux";
import './Dishes.css';
import AxiosApi from "../../AxiosAPI";
import {setModalAdds, setModalChanges} from "../../Store/Action";

const Dishes = (props) => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes);
    const setModalAdd = () => dispatch({type: setModalAdds});
    const setModalChange = () => dispatch({type: setModalChanges});

    const deleteDish = (e) => {
        AxiosApi.delete('/dishes/' + e + '.json')
    }

    return (
        <div>
            <div className="Dish-Header">
                <h2>Dishes</h2>
                <button onClick={setModalAdd}>Add new Dish</button>
            </div>
            <div>
                {dishes.map((dish) => {
                    return <DishCard openModal={setModalChange} delete={() => deleteDish(dish.id)} key={dish.id} name={dish.name} price={dish.price} img={dish.img}/>
                })}
            </div>
        </div>
    )
};

export default Dishes;