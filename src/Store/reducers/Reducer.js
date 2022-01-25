import {SET_DISH, SET_MODAL_ADD, SET_ORDER} from "../actions/Action";

const initialState = {
    dishes: [],
    orders: [],
    modalAddShown: false,
    modalChangeShown: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISH:
            return {...state, dishes: action.payload};
        case SET_ORDER:
            return {...state, orders: action.payload};
        case SET_MODAL_ADD:
            return {...state, modalAddShown: !state.modalAddShown};
        default:
            return state;
    }
};


export default reducer;