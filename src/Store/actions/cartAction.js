import axiosApi from "../../AxiosAPI";

export const ADD_PRODUCT = 'ADD PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_CART = 'SET_CART';

export const addProduct = (name, price) => ({type: ADD_PRODUCT, name: name, price: price});
export const deleteProduct = (name, price, index) => ({type: DELETE_PRODUCT, name: name, price: price, index: index});
export const setCart = (value) => ({type: SET_CART, payload: value});

export const setOrder = (order) => {
    return async () => {
        try {
            await axiosApi.post('/orders.json', order);
        } catch (e) {
            alert(e)
        }
    }
};