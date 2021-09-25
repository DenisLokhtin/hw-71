import React, {useState} from 'react';
import Overlay from "../overlay/Overlay";
import './ModalAdd.css'
import {useDispatch,} from "react-redux";
import {setModalAdds} from "../../../Store/Action";
import AxiosApi from "../../../AxiosAPI";

const ModalAdd = (props) => {
    const dispatch = useDispatch();
    const setModalAdd = (value) => dispatch({type: setModalAdds});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    const addDish = async () => {
        const data = {
            name: name,
            price: price,
            img: img
        }
        try {
            await AxiosApi.post('/dishes.json', data)
        } finally {
            setName("");
            setPrice("");
            setImg("");
            setModalAdd()
        }
    }

    return (
        <div>
            <Overlay/>
            <div className="modal">
                <p>Name</p>
                <input onChange={(e) => setName(e.target.value)} type="text"/>
                <p>Price</p>
                <input onChange={(e) => setPrice(e.target.value)} type="number"/>
                <p>IMG URL</p>
                <input onChange={(e) => setImg(e.target.value)} type="text"/>
                <div>
                    <button onClick={addDish}>Send</button>
                    <button onClick={setModalAdd}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default ModalAdd;