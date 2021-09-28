import VenueListItem from "./VenueListItem";
import "../Styling/UserList.css";

const VenueList = ({ venues }) => {
  return (
    <div className="user-list-container">
      <ul>
        {venues.map((venue) => {
          return <VenueListItem key={venue.id} venue={venue} />;
        })}
      </ul>
    </div>
  );
};

export default VenueList;
