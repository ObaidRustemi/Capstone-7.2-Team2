import React from "react";
import "../Styling/ArtworkInfo.css";

const ArtworkInfo = ({ image }) => {


  return (
    <div className="single-image-container">
      {image?.image ? <img src={image.image} /> : <h1>Image Not Found</h1>}
      <div className="card-body text-dark">
        <h4 className="card-title">{image.title}</h4>
      </div>
    </div>
  );
};

export default ArtworkInfo;
