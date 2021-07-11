import React from "react";
import {NavLink} from "react-router-dom";

export default function Dashboard () {
    return (
        <div className="App-body">
            <NavLink to='/crypto-app' className="app-card">
                <div>
                    Crypto
                </div>
            </NavLink>
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