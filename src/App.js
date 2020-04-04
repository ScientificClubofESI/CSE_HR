import React, { useState } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import Login from "layouts/Login.jsx"
import PrivateRoute from './PrivateRoute'
import { AuthContext } from "./context/auth"

const hist = createBrowserHistory();

function App(props) {
    console.log(localStorage.getItem("tokens"))
    const existingTokens = JSON.parse(localStorage.getItem("tokens")) || {};
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        console.log(data)
        console.log(JSON.stringify(data))
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router history={hist}>
                <Switch>
                    <Route path="/login" render={props => <Login {...props} />} />
                    <PrivateRoute path="/admin" component={AdminLayout} />
                    <Redirect to="/admin/dashboard" />
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}

export default App
