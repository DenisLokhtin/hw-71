export const SET_DISH = 'SET_DISH';
export const SET_ORDER = 'SET_ORDER';
export const SET_MODAL_ADD = 'SET_MODAL_ADD';

export const setModalAdd = () => ({type: SET_MODAL_ADD});
export const setDishes = (value) => ({type: SET_DISH, payload: value});
export const setOrders = (value) => ({type: SET_ORDER, payload: value});