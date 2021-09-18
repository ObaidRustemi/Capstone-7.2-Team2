//PAGES AND COMPONENTS
import Index from "./Pages/Index"
import NavBar from "./Components/NavBar";

//DEPENDENCIES
import React from "react";
import axios from "axios";
import{ Switch, Route} from "react-router-dom"
import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/index">
          <Index />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
