import { Link } from "react-router-dom";

const ArtworkListItem = ({ artwork }) => {
    return (
        <li>
            <Link to={`/artwork/${artwork.id}`}>
                <img src={artwork.image} alt="artwork img" />
            </Link>
        </li>
    );
};

export default ArtworkListItem;