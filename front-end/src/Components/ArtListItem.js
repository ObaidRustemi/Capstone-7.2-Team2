import { Link } from "react-router-dom";
import "../Styling/ArtworkIndex.css"

const ArtListItem = ({ art }) => {
  const mystyle = {
    // textdecoration: "none",
    color:"black"
  };
  return (
    <div className="single-art-container">
      <Link to={`/users/${art.artist_id}/artwork/${art.id}`}>
      <img src={art.image} alt={art.artist_id} widht="300px" height="300px" />
      <p  id="art-p" style={{color:"black"}}>{art.title}</p>
      </Link>
      </div>
  );
};

export default ArtListItem;
