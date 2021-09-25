import {setDish, setOrder, setModalAdds, setModalChanges} from "./Action";

const initialState = {
    dishes: [],
    orders: [],
    modalAddShown: false,
    modalChangeShown: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setDish:
            return {...state, dishes: action.payload}
        case setOrder:
            return {...state, orders: action.payload}
        case setModalAdds:
            return {...state, modalAddShown: !state.modalAddShown}
        case setModalChanges:
            return {...state, modalChangeShown: !state.modalChangeShown}
        default:
            return state;
    }
}


export default reducer;