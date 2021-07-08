import React from "react";
import {NavLink} from "react-router-dom";

export default function Header () {
    return (
        <div className="App-header">
            <div>
                <NavLink to='/' >
                    Apps
                </NavLink>
            </div>
            <div>
                <NavLink to='/' >
                    Contacts
                </NavLink>
            </div>
            <div>
                <NavLink to='/' >
                    Login
                </NavLink>
            </div>
        </div>
    )
}