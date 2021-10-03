import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./app/components/Header";
import ResultadoBusqueda from './app/pages/ResultadoBusqueda'
import Producto from './app/pages/Producto'
import "./app/styles/App.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/items">
                        <ResultadoBusqueda />
                    </Route>
                    <Route path="/producto">
                        <Producto />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
