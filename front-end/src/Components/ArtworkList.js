import ArtListItem from "./ArtListItem";
import "../Styling/ArtworkIndex.css";


const ArtworkList = ({ artwork }) => {
  return (
    <div className="artwork-index">
      {artwork.map((art) => {
        return <ArtListItem key={art.id} art={art} />;
      })}
    </div>
  );
};
export default ArtworkList;
