import React from "react";
import "../Styling/ArtistCard.css";


const ArtistInfoCard = ({ currentUser }) => {
  
  return (
    <div className="d-flex-justify-content-center">
      <div className="text-center">
        <div className="overflow">
          <img className="img-top" src={currentUser.image} alt="artist-profile-photo" />
        </div>
        <div className="body-text-dark">
          <h4 className="title">{currentUser.username}</h4>
          <p className="text-secondary">{currentUser.description}</p>
          {/* <a href="#" className="btn btn-outline-sucess">Edit</a>
          <a href="#" className="btn btn-outline-sucess">Add Image</a> */}
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoCard;
