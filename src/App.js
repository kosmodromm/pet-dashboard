import './App.scss';
import Header from './Components/Header'
import Dashboard from "./Components/Dashboard";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./Components/Weather/Weather";
import React from "react";
import Crypto from "./Components/Crypto/Crypto";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/weather-app' component={Weather}/>
        <Route exact path='/crypto-app' component={Crypto}/>
      </Switch>
      <footer className="App-footer">
        Footer
      </footer>
    </div>
      </BrowserRouter>
  );
}

export default App;
