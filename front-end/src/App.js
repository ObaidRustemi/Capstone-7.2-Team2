//PAGES AND COMPONENTS
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";

import UsersContainer from "./Containers/UsersContainer";
import UserRoutingContainer from "./Containers/UserRoutingContainer";

import VenueInfoContainer from "./Containers/VenueInfoContainer";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import UploadArtwork from "./Components/UploadArtwork";
import UploadVenueImage from "./Components/UploadVenueImage";

//DEPENDENCIES
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        {/* <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        > */}
          {/* <main> */}
          {/* <div className="w-100" style={{ maxWidht: "400px" }}> */}
            <Switch>
              <Route exact path="/users">
                <UsersContainer />
              </Route>
              <Route exact path="/users/:id">
                <UserRoutingContainer />
              </Route>
              <Route exact path="/" component={Index} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />{/* make a public dashboard */}
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/uploadArtwork" component={UploadArtwork} />
              <PrivateRoute
                path="/uploadVenueImage"
                component={UploadVenueImage}
              />

              <Route exact path="/users/:id/venues/:venue_id">
                <VenueInfoContainer />
              </Route>
            </Switch>
          {/* </div> */}
        {/* </Container> */}
      </AuthProvider>
    </div>
  );
}

export default App;
