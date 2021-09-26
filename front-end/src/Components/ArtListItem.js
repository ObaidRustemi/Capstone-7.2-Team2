import { Link } from "react-router-dom";


const ArtListItem = ({ art }) => {
    // debugger
  return (
    <li>
      {/* <Link to={`/users/${venue.owner_id}/artwork/${venue.id}`}> */}
      <h2>Title of Art: {art.title}</h2>
      {/* </Link> */}
          <img 
          src={art.image}/>
    </li>
  );
};

export default ArtListItem;
