import VenueListItem from "./VenueListItem";
import "../Styling/UserList.css";
import "../Styling/VenuesIndex.css";

const VenueList = ({ venues }) => {
  return (
    <div className="venue-list-container">
      <ul className="venue-index-ul">
        {venues.map((venue) => {
          return <VenueListItem key={venue.id} venue={venue} />;
        })}
      </ul>
    </div>
  );
};

export default VenueList;
