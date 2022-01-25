import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Dishes from "./Components/Dishes/Dishes";
import Orders from "./Components/Orders/Orders";
import AxiosApi from "./AxiosAPI";
import {setDishes, setOrders,} from "./Store/actions/Action";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import './App.css';
import ModalAdd from "./Components/UI/ModalAdd/ModalAdd";

function App() {
    const dispatch = useDispatch();
    const modalAddShown = useSelector(state => state.Reducer.modalAddShown);

    const modalAdd = () => {
        if (modalAddShown) {
            return <ModalAdd/>
        }
    };

    useEffect(() => {
        const getInfo = async () => {
            try {
                await AxiosApi.get('.json').then(response => {
                    if (response.data) {
                        const arrayDishes = Object.entries(response.data.dishes);
                        const dishes = [];
                        for (let [key, value] of arrayDishes) {
                            dishes.push({...value, id: key})
                        }
                        dispatch(setDishes([...dishes]));
                    }
                    if (response.data.orders) {
                        const arrayOrders = Object.values(response.data.orders);
                        dispatch(setOrders([...arrayOrders]));
                    }
                });
            } catch (e) {
                console.log(e);
            }
        };

        setInterval(() => {
            getInfo()
        }, 3000)
    });

    return (
        <BrowserRouter>
            {modalAdd()}
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
