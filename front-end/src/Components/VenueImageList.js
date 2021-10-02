import React from "react";
import "../Styling/VenueInfo.css";
import Modal from "./Modal";
import VenueImageListItem from "./VenueImageListItem";
import { motion } from 'framer-motion'

const VenueImageList = ({ currentVenue, venueImages, selectedImg, setSelectedImg }) => {
  return (
    <div className="venue-info-container">
      <h2>{currentVenue.name}</h2>
      <img
        className="venue-profile-photo"
        src={currentVenue.venue_profile_photo}
      />
      <div className="venue-bottom-container">
      <div className="venue-blurb-container">
        <p>{currentVenue.venue_info}</p>
        <p>{currentVenue.address}</p>
      </div>
      <div className="venue-image-list-container">
        {venueImages.map((image) => {
          return <VenueImageListItem key={image.id} setSelectedImg={setSelectedImg} image={image}
       
          />;
        })}
      </div>
      </div>
     {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
};

export default VenueImageList;
