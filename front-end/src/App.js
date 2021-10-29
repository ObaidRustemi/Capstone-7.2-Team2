//PAGES AND COMPONENTS
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { useEffect } from "react";
import { getUsers } from "./Actions/userActions";
import { useDispatch } from "react-redux";
import UsersContainer from "./Containers/UsersContainer";
import UserRoutingContainer from "./Containers/UserRoutingContainer";
import ArtworkInfoContainer from "./Containers/ArtworkInfoContainer";
import { apiURL } from "./util/apiURL";
import VenueInfoContainer from "./Containers/VenueInfoContainer";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import UploadArtwork from "./Components/UploadArtwork";
import UploadVenueImage from "./Components/UploadVenueImage";
import VenueOwnerUpdate from "./Components/VenueOwnerUpdate";
import Footer from "./Components/Footer"
// import Chat from "./Components/Chat";

//DEPENDENCIES
import React from "react";
import { Switch, Route } from "react-router-dom";

import { AuthProvider } from "./Contexts/AuthContext";
import Contact from "./Components/Contact";

function App() {
  const API = apiURL()
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/users`);
        const action = getUsers(res.data.payload);
        console.log("about to dispatch:::", action);
        await dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        {/* <Chat /> */}
        <Switch>
          <Route exact path="/users">
            <UsersContainer />
          </Route>
          <Route exact path="/users/:firebase_uid">
            <UserRoutingContainer />
          </Route>
          <Route exact path="/users/:id/artwork/:artwork_id">
            <ArtworkInfoContainer />
          </Route>
          <Route exact path="/" component={Index} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/* make a public dashboard */}
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/contact" component={Contact}/>
          <PrivateRoute path="/uploadArtwork" component={UploadArtwork} />
          <PrivateRoute path="/uploadVenueImage" component={UploadVenueImage} />
          <PrivateRoute
            exact
            path="/venueownerupdate"
            component={VenueOwnerUpdate}
          />
          <Route
            exact
            path="/users/:firebase_uid/venues/:venue_id"
            component={VenueInfoContainer}
          />
        </Switch>
        {/* </div> */}
        {/* </Container> */}
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
