import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Registration} from "./pages/Registration/Registration";
import {Login} from "./pages/Login/Login";
import {Home} from "./pages/Home/Home";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                <Redirect to="/" />
            </Switch>
        )

    }
    return (
        <Switch>
            <Route path="/registration">
                <Registration/>
            </Route>
            <Redirect to="/registration"/>
        </Switch>
    )
}