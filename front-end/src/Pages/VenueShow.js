import React, { useState } from "react";
import "../Styling/UserIndex.css";
import VenueList from "../Components/VenueList";
import NewVenueContainer from "../Containers/NewVenueContainer";


const VenueShow = ({ venues, showAddVenue, setShowAddVenue, newVenueAdded, setNewVenueAdded }) => {
  const [showHideButton, setShowHideButton] = useState(null)
  return (
    <div className="user-show-container">
      <div>
        <h3>Venue Owner Details</h3>
        <VenueList venues={venues} />
        {/* <UploadForm /> */}
      </div>
      {showAddVenue ? <NewVenueContainer setShowHideButton={setShowHideButton} newVenueAdded={newVenueAdded} setNewVenueAdded={setNewVenueAdded}/> : null}
     {showHideButton? null: <button onClick={() => setShowAddVenue(true)}>Add Venue</button>}
      {showHideButton? <button onClick={() => {
        setShowAddVenue(false)
        setShowHideButton(false)
      }}>Hide</button> : null}
    </div>
  );
};

export default VenueShow;
