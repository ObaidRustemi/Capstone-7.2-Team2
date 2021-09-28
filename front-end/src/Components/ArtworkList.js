import { apiURL } from "../util/apiURL";
import ArtListItem from "./ArtListItem";
import "../Styling/ArtworkIndex.css"

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