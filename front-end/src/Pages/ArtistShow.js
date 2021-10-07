import "../Styling/ArtworkIndex.css";
import { useState, useEffect } from "react";

import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
import ArtistEditContainer from "../Containers/ArtistEditContainer";

const ArtistShow = ({ artwork, currentUser }) => {
const [artistEdit, setArtistEdit] = useState(null)

  return (
    <div className="artist-show-container">
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
   
     <div className="card">
       <ArtistInfoCard currentUser={currentUser} />
       {/* <ArtistEditContainer currentUser={currentUser} setArtistEdit={setArtistEdit}/> */}
    
     </div>
      </div>
    </div>
  );
};

export default ArtistShow;
