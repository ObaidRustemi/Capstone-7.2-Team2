import React, { useState } from "react";
import "../Styling/ArtworkIndex.css";
<<<<<<< HEAD


import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";


const ArtistShow = ({ artwork, userObj }) => {

=======
import ArtistEditContainer from "../Containers/ArtistEditContainer";
import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
>>>>>>> main

const ArtistShow = ({
  artwork,
  userObj,
  showEditArtist,
  setShowEditArtist,
}) => {
  return (
    <div className="artist-show-container">
      {/* <h2>Artist Details</h2> */}
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
<<<<<<< HEAD
   
     <div className="card">
       <ArtistInfoCard userObj={userObj} />
       {/* <ArtistEditContainer currentUser={currentUser} setArtistEdit={setArtistEdit}/> */}
    
     </div>
=======
        <div className="card">
          <ArtistInfoCard userObj={userObj} />
          {showEditArtist ? <ArtistEditContainer /> : null}
          <button onClick={() => showEditArtist? setShowEditArtist(null): setShowEditArtist(true)}>
            Edit
          </button>
        </div>
>>>>>>> main
      </div>
    </div>
  );
};

export default ArtistShow;
