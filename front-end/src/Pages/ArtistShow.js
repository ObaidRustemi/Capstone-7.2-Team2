import "../Styling/ArtworkIndex.css";


import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";


const ArtistShow = ({ artwork, userObj }) => {


  return (
    <div className="artist-show-container">
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
   
     <div className="card">
       <ArtistInfoCard userObj={userObj} />
       {/* <ArtistEditContainer currentUser={currentUser} setArtistEdit={setArtistEdit}/> */}
    
     </div>
      </div>
    </div>
  );
};

export default ArtistShow;
