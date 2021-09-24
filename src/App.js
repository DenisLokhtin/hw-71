import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Dishes from "./Components/Dishes/Dishes";
import Orders from "./Components/Orders/Orders";
import AxiosApi from "./AxiosAPI";
import {setDish, setOrder} from "./Store/Action";
import {useDispatch} from "react-redux";
import './App.css';
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();
    const setDishes = (value) => dispatch({type: setDish, payload: value});
    const setOrders = (value) => dispatch({type: setOrder, payload: value});


    useEffect(() => {
        console.log('d')
        const getInfo = async () => {
            try {
                await AxiosApi.get('.json').then(response => {
                    if (response.data !== null) {
                        const arrayDishes = Object.entries(response.data.dishes)
                        const arrayOrders = Object.entries(response.data.orders)
                        const dishes = [];
                        const orders = [];
                        for (let [key, value] of arrayDishes) {
                            dishes.push({...value, id: key})
                        }
                        for (let [key, value] of arrayOrders) {
                            orders.push({...value, id: key})
                        }
                        setOrders([...orders]);
                        setDishes([...dishes]);
                    }
                });
            } catch (e) {
                alert(e);
            }
        }

        getInfo()
    })

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
