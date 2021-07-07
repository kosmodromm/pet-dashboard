import React from "react";
import {NavLink} from "react-router-dom";

export default function Dashboard () {
    return (
        <div className="App-body">
            <div className="crypto-app">
                Crypto
            </div>
            <div className="planner-app">
                Planner
            </div>
            <div className="weather-app">
            <NavLink to='/weather-app' >
                Weather
            </NavLink>
            </div>
        </div>
    )
}