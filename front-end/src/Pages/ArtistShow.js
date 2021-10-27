import React, { useState, useEffect} from "react";
import "../Styling/ArtworkIndex.css";
import ArtistEditContainer from "../Containers/ArtistEditContainer";
import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
import useCurrentUser from "../util/useCurrentUser";
import { useParams } from "react-router";

const ArtistShow = ({
  artwork,
  userObj,
  showEditArtist,
  setShowEditArtist,
}) => {
  const [showEditButton, setShowEditButton] = useState(null);

  const { firebase_uid } = useParams();

  useEffect(() => {
    const checkEditAuth = async () => {
      if (!currentUser?.firebase_uid) {
        return;
      } else {
        debugger
        (await currentUser.firebase_uid) === firebase_uid
          ? setShowEditButton(true)
          : setShowEditButton(null);
        return;
      }
    };

    checkEditAuth();
  }, []);

  const currentUser = useCurrentUser();
  

  return (
    <div className="artist-show-container">
      {/* <h2>Artist Details</h2> */}
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
        <div className="card">
          <ArtistInfoCard userObj={userObj} />
          {showEditArtist ? <ArtistEditContainer userObj={userObj} /> : null}
          {showEditButton? <button
            onClick={() =>
              showEditArtist ? setShowEditArtist(null) : setShowEditArtist(true)
            }
          >
            Edit
          </button> : null}
        </div>
      </div>
    </div>
  );
};

export default ArtistShow;
