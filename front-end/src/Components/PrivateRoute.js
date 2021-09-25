import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useSelector } from "react-redux";

//create wrappper from current route
//{{component: Componet}}
//{..rest} rest of probs
export default function PrivateRoute({ component: Component, ...rest }) {
  const currentUser  = useSelector((state) => state.currentUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
}
