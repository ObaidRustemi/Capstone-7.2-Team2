import React, { useState } from "react";
import "../Styling/UserIndex.css";
import VenueList from "../Components/VenueList";
import NewVenueContainer from "../Containers/NewVenueContainer";
import VenueOwnerShow from "../Components/VenueOwnerShow"
import ProfileCard from "../Components/ProfileCard"


const VenueShow = ({ venues, showAddVenue, setShowAddVenue, newVenueAdded, setNewVenueAdded, userObj }) => {
  const [showHideButton, setShowHideButton] = useState(null)
  return (
    <div className="user-show-container">
      <div>
        {/* <ProfileCard userObj={userObj} /> */}
        {/* <VenueOwnerShow userObj={userObj}/> */}
        <h3>My Venues</h3>
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
