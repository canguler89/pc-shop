import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom"
import NavBar from "./Pages/Navbar"
import HomePage from "./Pages/HomePage";
import Cases from "./components/Cases";
import Cpu from "./components/Cpu";
import GraphicCard from "./components/GraphicCard";
import HardDrives from "./components/HardDrives";
import Keyboards from "./components/Keyboards";
import Mainboards from "./components/Mainboards";
import Mouses from "./components/Mouses";
import Ram from "./components/Ram";
import Cart from "./Pages/Cart"

function App() {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cases" component={Cases} />
                <Route path="/cpu" component={Cpu} />
                <Route path="/graphics" component={GraphicCard} />
                <Route path="/harddrives" component={HardDrives} />
                <Route path="/keyboards" component={Keyboards} />
                <Route path="/mainboards" component={Mainboards} />
                <Route path="/mouses" component={Mouses} />
                <Route path="/ram" component={Ram} />
                <Route path="/cart" component={Cart} /> 
            </Switch>

        </div>
    )
}

export default App;
