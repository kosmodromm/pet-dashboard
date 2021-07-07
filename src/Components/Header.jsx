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
                Contacts
            </div>
            <div>
                Login
            </div>
        </div>
    )
}