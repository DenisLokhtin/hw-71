import {addProduct, setState} from "./Action";

const initialState = {
    dishes: [],
    orders: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setState:
            return {...state, products: action.payload};
        case addProduct:
            if (!state.orders.hasOwnProperty(action.name)) {
                return {
                    ...state, cart: {
                        ...state.orders,
                        [action.name]: {
                            price: action.price,
                            count: 1,
                        },
                    }
                }
            }
            let count = state.orders[action.name].count + 1
            return {
                ...state, cart: {
                    ...state.orders,
                    [action.name]: {
                        price: action.price,
                        count: count,
                    },
                }
            }
        default:
            return state;
    }
}


export default reducer;