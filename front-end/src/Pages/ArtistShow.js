import "../Styling/ArtworkIndex.css";

import ArtworkList from "../Components/ArtworkList";

const ArtistShow = ({ artwork, currentUser }) => {
 
  return (
    <div className="artist-show-container">
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
        <h4>Artist Details</h4>
     
      </div>
    </div>
  );
};

export default ArtistShow;
