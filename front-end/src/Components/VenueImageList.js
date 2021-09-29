import React from "react";
import "../Styling/VenueInfo.css"
import VenueImageListItem from "./VenueImageListItem";

const VenueImageList = ({currentVenue, venueImages}) => {
    
  return (
    <div className="venue-info-container" >
      <h2>{currentVenue.name}</h2>
      <img src={currentVenue.venue_profile_photo} />
      <p>{currentVenue.address}</p>
      {venueImages.map((image) => {
          return <VenueImageListItem  image={image}/>
      })}
    </div>
  );
};

export default VenueImageList;
