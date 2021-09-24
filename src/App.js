import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Dishes from "./Components/Dishes/Dishes";
import Orders from "./Components/Orders/Orders";
import AxiosApi from "./AxiosAPI";
import './App.css';

function App() {

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
