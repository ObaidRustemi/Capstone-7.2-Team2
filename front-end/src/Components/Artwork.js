import { Link } from "react-router-dom";

const ArtworkListItem = ({ artwork }) => {
    return (
        <li>
            <Link to={`/users/${artwork.artist_id}/artwork/${artwork.id}`}>
                <img src={artwork.image} alt="artwork img" />
                    <h2>{artwork.title}</h2>
            </Link>
        </li>
    );
};

export default ArtworkListItem;