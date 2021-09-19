//PAGES AND COMPONENTS
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";

//DEPENDENCIES
import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Contexts/AuthContext";
const API = apiURL();

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {/* <main> */}
        <div className="w-100" style={{ maxWidht: "400px" }}>
            <Switch>
              <Route exact path="/" component={Index} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* <Index /> */}
              {/* </Route> */}
            </Switch>
          {/* </main> */}
        </div>
      </Container>
          </AuthProvider>
    </div>
  );
}

export default App;
