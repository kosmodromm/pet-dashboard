import React from "react";
import {NavLink} from "react-router-dom";

export default function Dashboard () {
    return (
        <div className="App-body">
            <div className="app-card">
                Crypto
            </div>
            <div className="app-card">
                Planner
            </div>
            <NavLink to='/weather-app' className="app-card">
            <div>
                Weather
            </div>
            </NavLink>
        </div>
    )
}