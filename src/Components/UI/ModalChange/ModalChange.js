import Overlay from "../overlay/Overlay";
import './ModalChange.css'
import {useDispatch,} from "react-redux";
import {setModalChanges} from "../../../Store/Action";

const ModalChange = (props) => {
    const dispatch = useDispatch();
    const setModalChange = (value) => dispatch({type: setModalChanges});

    return (
        <div>
            <Overlay/>
            <div className="modal">
                <p>Name</p>
                <input type="text"/>
                <p>Price</p>
                <input type="number"/>
                <p>IMG URL</p>
                <input type="text"/>
                <div>
                    <button>Send</button>
                    <button onClick={setModalChange}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default ModalChange;