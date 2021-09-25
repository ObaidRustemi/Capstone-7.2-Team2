//PAGES AND COMPONENTS
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import VenuesIndexPage from "./Pages/VenuesIndexPage";
import UsersContainer from "./Containers/UsersContainer";
import ArtworkIndex from "./Pages/ArtworkIndex";
import ArtistShow from "./Pages/ArtistShow";
import VenueOwnerContainer from "./Containers/VenueOwnerContainer";

//DEPENDENCIES
import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";

const API = apiURL();

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/users">
            <UsersContainer />
          </Route>
          <Route exact path="/users/:id">
            <VenueOwnerContainer/>
            <ArtistShow />
          </Route>
          <Route exact path="/index">
            <Index />
          </Route>
          <Route exact path="/ArtworkIndex">
            <ArtworkIndex />
          </Route>
          <Route exact path="/venuesIndex">
            <VenuesIndexPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
