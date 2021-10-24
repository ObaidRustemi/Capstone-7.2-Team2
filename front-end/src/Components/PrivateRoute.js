import React from "react";
import { Route, Redirect } from "react-router-dom";
import useCurrentUser from "../util/useCurrentUser";

export default function PrivateRoute({ component: Component, ...rest }) {
  const currentUser = useCurrentUser();
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
