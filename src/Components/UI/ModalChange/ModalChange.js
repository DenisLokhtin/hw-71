import Overlay from "../overlay/Overlay";
import './ModalChange.css'
import React, {useState} from "react";

const ModalChange = (props) => {
    const [data, setData] = useState({
        name: '',
        price: '',
        img: '',
    });

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <div>
            <Overlay/>
            <div className="modal">
                <p>Name</p>
                <input onChange={inputChangeHandler} name='name' value={data.name} type="text"/>
                <p>Price</p>
                <input onChange={inputChangeHandler} name='price' value={data.price} type="number"/>
                <p>IMG URL</p>
                <input onChange={inputChangeHandler} name='img' value={data.img} type="text"/>
                <div>
                    <button>Send</button>
                    <button onClick={() => props.close()}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default ModalChange;