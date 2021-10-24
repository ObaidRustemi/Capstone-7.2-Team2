import { Link } from "react-router-dom";
import "../Styling/ArtworkIndex.css"

const ArtListItem = ({ art }) => {
  return (
    <div className="single-art-container">
      <Link to={`/users/${art.artist_id}/artwork/${art.id}`}>
      <p>Title of Art: {art.title}</p>
      <img src={art.image} alt={art.artist_id}/>
      </Link>
      </div>
  );
};

export default ArtListItem;
