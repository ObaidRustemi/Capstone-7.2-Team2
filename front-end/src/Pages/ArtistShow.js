import React, { useState } from "react";
import "../Styling/ArtworkIndex.css";
import ArtistEditContainer from "../Containers/ArtistEditContainer";
import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";

const ArtistShow = ({ artwork, userObj }) => {
  return (
    <div className="artist-show-container">
      {/* <h2>Artist Details</h2> */}
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
        <div className="card">
          <ArtistInfoCard userObj={userObj} />
          <ArtistEditContainer
            // setArtistEdit={setArtistEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistShow;
