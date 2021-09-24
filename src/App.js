import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Dishes from "./Components/Dishes/Dishes";
import Orders from "./Components/Orders/Orders";
import AxiosApi from "./AxiosAPI";
import {setDish, setOrder} from "./Store/Action";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes);
    const orders = useSelector(state => state.orders);
    const setDishes = (value) => dispatch({type: setDish, payload: value});
    const setOrders = (value) => dispatch({type: setOrder, payload: value});

    useEffect(() => {
        const getInfo = async () => {
            try {
                await AxiosApi.get('.json').then(response => {
                    if (response.data.dishes !== null) {
                        const arrayDishes = Object.entries(response.data.dishes);
                        const dishes = [];
                        for (let [key, value] of arrayDishes) {
                            dishes.push({...value, id: key})
                        }
                        setDishes([...dishes]);
                    }
                    if (response.data.orders !== null) {
                        const arrayOrders = Object.entries(response.data.orders)
                        const orders = [];
                        for (let [key, value] of arrayOrders) {
                            orders.push({...value, id: key})
                        }
                        setOrders([...orders]);
                    }
                });
            } catch (e) {
                alert(e);
            }
        }

        getInfo()
    }, [dishes, orders])

    return (
        <BrowserRouter>
            <div className="navigation">
                <h1>Turtle Pizza Admin</h1>
                <div>
                    <NavLink to="/">Dishes</NavLink>
                    <NavLink to="/Orders">Orders</NavLink>
                </div>
            </div>
            <div className="container">
                <div className="container-inner">
                    <Switch>
                        <Route exact path="/" component={Dishes}/>
                        <Route exact path="/Orders" component={Orders}/>
                        <Route render={() => <h1>NOT FOUND</h1>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
