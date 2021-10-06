import React, { useState, useEffect } from "react";
import "../Styling/VenueInfo.css";
import Modal from "./Modal";
import VenueImageListItem from "./VenueImageListItem";
import VenueEditContainer from "../Containers/VenueEditContainer";
import { motion } from "framer-motion";

const VenueImageList = ({
  currentVenue,
  venueImages,
  selectedImg,
  setSelectedImg,
  setVenueChange,
  venueChange,
}) => {
  const [editVenue, setEditVenue] = useState(null);
  const [showHideButton, setShowHideButton] = useState(null);
  return (
    <div className="venue-info-container">
      <h2>{currentVenue.name}</h2>
      <img
        className="venue-profile-photo"
        src={currentVenue.venue_profile_photo}
      />
      <div className="venue-bottom-container">
        <div className="combined-image-blurb-container">
          <div className="venue-blurb-container">
            <p>{currentVenue.venue_info}</p>
            <p>{currentVenue.address}</p>
          </div>
          <div className="venue-image-list-container">
            {venueImages.map((image) => {
              return (
                <VenueImageListItem
                  key={image.id}
                  setSelectedImg={setSelectedImg}
                  image={image}
                />
              );
            })}
          </div>
        </div>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <div className="button-and-form-container">
          {editVenue ? (
            <VenueEditContainer 
            setVenueChange={setVenueChange} 
            currentVenue={currentVenue} 
            setShowHideButton={setShowHideButton} 
            venueChange={venueChange}
            />
          ) : null}
          {showHideButton ? null : (
            <button className="show-edit-button" onClick={() => setEditVenue(true)}>Edit Venue</button>
          )}
          {showHideButton ? (
            <button className="hide-button"
              onClick={() => {
                setEditVenue(false);
                setShowHideButton(false);
              }}
            >
              Hide
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VenueImageList;
