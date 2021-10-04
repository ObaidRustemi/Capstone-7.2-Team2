import React, { useEffect, useState } from "react";
import "../Styling/UserIndex.css";
import axios from "axios";
import VenueList from "../Components/VenueList";
import NewVenueContainer from "../Containers/NewVenueContainer";
import { useSelector } from "react-redux";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const VenueShow = ({ venues, showAddVenue, setShowAddVenue }) => {
  const [showHideButton, setShowHideButton] = useState(null)
  return (
    <div className="user-show-container">
      <div>
        <h3>Venue Owner Details</h3>
        <VenueList venues={venues} />
      </div>
      {showAddVenue ? <NewVenueContainer setShowHideButton={setShowHideButton}/> : null}
     {showHideButton? null: <button onClick={() => setShowAddVenue(true)}>Add Venue</button>}
      {showHideButton? <button onClick={() => {
        setShowAddVenue(false)
        setShowHideButton(false)
      }}>Hide</button> : null}
    </div>
  );
};

export default VenueShow;
