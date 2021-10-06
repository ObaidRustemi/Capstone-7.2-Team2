import React from "react";
import "../Styling/ArtistCard.css";


const ArtistInfoCard = ({ currentUser }) => {
  
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card text-center">
        <div className="overflow">
          <img className="card-img-top" src={currentUser.image} alt="artist-profile-photo" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{currentUser.username}</h4>
          <p className="card-text text-secondary">{currentUser.description}</p>
          <a href="#" className="btn btn-outline-sucess">Edit</a>
          <a href="#" className="btn btn-outline-sucess">Add Image</a>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoCard;
