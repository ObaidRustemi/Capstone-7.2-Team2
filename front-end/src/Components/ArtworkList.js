import { apiURL } from "../util/apiURL";
import ArtListItem from "./ArtListItem";
<<<<<<< HEAD
import "../Styling/ArtworkIndex.css"

=======
import "../Styling/ArtworkIndex.css";
>>>>>>> ccbc9fecd41ef69729668c9f12a633a68229e66b
const API = apiURL();

const ArtworkList = ({ artwork }) => {
  return (
    <div className="artwork-index">
      <ul className="artwork-index-ul">
        {artwork.map((art) => {
          return <ArtListItem key={art.id} art={art} />;
        })}
      </ul>
    </div>
  );
};
export default ArtworkList;
