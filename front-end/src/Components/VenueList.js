import Venue from "./Venue";
// import "../Styling/UserList.css"



const VenueList = ({venues}) => {


  return (
    <div className="user-list-container">
      <ul>
        {venues.map((venue) => {
          return <Venue key={venue.id} venue={venue}/>;
        })}
      </ul>
    </div>
  );
};

export default VenueList;