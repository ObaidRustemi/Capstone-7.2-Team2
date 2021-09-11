import axios from "axios";
import Index from "./Pages/Index"

import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {

  return (
    <div>
      <h1>ArtApp Main</h1>
    <Index />
    </div>
  );
}

export default App;
