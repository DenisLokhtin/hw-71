import {ADD_PRODUCT, DELETE_PRODUCT, SET_CART} from "../actions/cartAction";

const initialState = {
    cart: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (!state.cart.hasOwnProperty(action.name)) {
                return {
                    ...state, cart: {
                        ...state.cart,
                        [action.name]: {
                            price: action.price,
                            count: 1,
                        },
                    }
                }
            }
            let count = state.cart[action.name].count + 1;
            return {
                ...state, cart: {
                    ...state.cart,
                    [action.name]: {
                        price: action.price,
                        count: count,
                    },
                }
            };
        case DELETE_PRODUCT:
            let count1 = state.cart[action.name].count - 1;
            if (count1 === 0) {
                delete state.cart[action.name];
                return {
                    ...state, cart: {...state.cart}

                }
            }
            return {
                ...state, cart: {
                    ...state.cart,
                    [action.name]: {
                        price: action.price,
                        count: count1,
                    },
                }
            };
        case SET_CART:
            return {...state, cart: action.payload};
        default:
            return state;
    }
};


export default reducer;