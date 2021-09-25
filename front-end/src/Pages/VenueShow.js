import React from "react";
import "../Styling/UserIndex.css";
import VenueList from "../Components/VenueList";

const Show = ({ venues }) => {
  return (
    <div className="user-show-container">
      <h3>Venue Owner Details</h3>
      <VenueList venues={venues} />
    </div>
  );
};

export default Show;