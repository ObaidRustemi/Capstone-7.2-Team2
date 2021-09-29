import React from "react";
import "../Styling/VenueInfo.css";
import VenueImageListItem from "./VenueImageListItem";

const VenueImageList = ({ currentVenue, venueImages }) => {
  return (
    <div className="venue-info-container">
      <h2>{currentVenue.name}</h2>
      <img
        className="venue-profile-photo"
        src={currentVenue.venue_profile_photo}
      />
      <div className="venuue-bottom-container">
      <div className="venue-blurb-container">
        <p>{currentVenue.venue_info}</p>
        <p>{currentVenue.address}</p>
      </div>
      <div className="venue-image-list-container">
        {venueImages.map((image) => {
          return <VenueImageListItem image={image} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default VenueImageList;
