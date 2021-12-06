import React from "react";
import "../Styling/ArtistCard.scss";


const ArtistInfoCard = ({ userObj }) => {
  
  return (
    <div className="d-flex-justify-content-center">
      <div className="text-center">
        <div className="overflow">
          <img className="img-top" src={userObj.image} alt="artist-profile" />
        </div>
        <div className="body-text-dark">
          <h4 className="title">{userObj.username}</h4>
          <p>Art Style: {userObj.type_of_art}</p>
          <p className="text-secondary">{userObj.description}</p>
          {/* <a href="#" className="btn btn-outline-sucess">Edit</a>
          <a href="#" className="btn btn-outline-sucess">Add Image</a> */}
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoCard;
