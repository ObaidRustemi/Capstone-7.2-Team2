import { apiURL } from "../util/apiURL";
import Artwork from "./Artwork";

const API = apiURL();

const ArtworkList = ({ artworks }) => {
  return (
    <div className="artwork-index">
      <ul>
        {artworks.map((artwork) => {
          return <Artwork key={artwork.id} artwork={artwork} />;
        })}
      </ul>
    </div>
  );
};

export default ArtworkList;
