import { Link } from "react-router-dom";

const Venue = ({ venue }) => {
  return (
    <li>
      <Link to={`/users/${venue.owner_id}/venues/${venue.id}`}>
        <p>{venue.name}</p>
      </Link>
    </li>
  );
};

export default Venue;
