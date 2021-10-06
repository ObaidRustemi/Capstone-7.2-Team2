import "../Styling/ArtworkIndex.css";

import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
import ArtistEditContainer from "../Containers/ArtistEditContainer";

const ArtistShow = ({ artwork, currentUser }) => {

  return (
    <div className="artist-show-container">
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
        <h4>Artist Details</h4>
     <div className="card">
       <ArtistInfoCard currentUser={currentUser} />
       <ArtistEditContainer/>
       {/* <div className="card-body">
         <img src= "" />
         <h2 className="card-title"></h2>
         <p className="card-description"></p>
         <button className="card-button">Edit Profile</button>
       </div> */}
     </div>
      </div>
    </div>
  );
};

export default ArtistShow;
