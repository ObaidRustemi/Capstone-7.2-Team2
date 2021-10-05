import React from "react";
import "../Styling/VenueInfoPage.css";
import VenueImageList from "../Components/VenueImageList";
import VenueEditContainer from "../Containers/VenueEditContainer";

const VenueInfoPage = ({
  currentVenue,
  venueImages,
  selectedImg,
  setSelectedImg,
}) => {
  return (
    <div className="venue-show-container">
      <VenueImageList
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        currentVenue={currentVenue}
        venueImages={venueImages}
      />
    </div>
  );
};

export default VenueInfoPage;
