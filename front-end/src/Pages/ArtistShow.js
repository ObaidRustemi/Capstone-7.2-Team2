import "../Styling/UserIndex.css";

import ArtworkList from "../Components/ArtworkList";

const ArtistShow = ({ artwork }) => {
 
  return (
    <div className="artist-show-container">
      <h3>Artist Details</h3>
      <ArtworkList artwork={artwork} />
    </div>
  );
};

export default ArtistShow;
