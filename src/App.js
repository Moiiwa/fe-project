import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./homepage/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
