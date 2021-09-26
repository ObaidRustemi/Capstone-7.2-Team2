import { Link } from "react-router-dom";



const Venue = ({ venue }) => {
  return (
    <li>
      <Link to={`/users/${venue.owner_id}/venues/${venue.id}`}>
        <img
        src={venue.venue_profile_photo}
        />
        <p>{venue.name}</p>

      </Link>
    </li>
  );
};

export default Venue;
