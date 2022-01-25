import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import reducer from "./reducers/Reducer";

const rootReducer = combineReducers({
    'cart': cartReducer,
    'Reducer': reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;