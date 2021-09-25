import "../Styling/UserIndex.css";
import ArtworkList from "../Components/ArtworkList";

const ArtistShow = ({ artworks }) => {
  return (
    <div className="artist-show-container">
      <h3>Artist Details</h3>
      <ArtworkList artworks={artworks}/>
    </div>
  );
};

export default ArtistShow;