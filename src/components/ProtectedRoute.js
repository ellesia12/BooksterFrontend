import React, { Component } from "react"
import { token } from "./LogIn"

import { Route, Redirect } from "react-router-dom";



const ProtectedRoute = ({ component: Component, onLogout, ...rest}) => {
    return(
        <Route
        {...rest}
        render={props=>
        token ? (
            <Component {...props} onLogout={onLogout} />
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: props.location}
            }}
        />
        )
        }
        />
    );
}


export default ProtectedRoute;