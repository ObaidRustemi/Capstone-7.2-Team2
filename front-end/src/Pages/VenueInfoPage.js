import React from "react";
import "../Styling/VenueInfoPage.css";
import VenueImageList from "../Components/VenueImageList";
import VenueEditContainer from "../Containers/VenueEditContainer"

const VenueInfoPage = ({
  currentVenue,
  venueImages,
  selectedImg,
  setSelectedImg,
}) => {
  return (
    <div>
      <VenueImageList
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        currentVenue={currentVenue}
        venueImages={venueImages}
      />
      <VenueEditContainer/>
    </div>
  );
};

export default VenueInfoPage;
