import React, { useState, useEffect } from "react";
import "../Styling/ArtworkIndex.css";
import ArtistEditContainer from "../Containers/ArtistEditContainer";
import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
import useCurrentUser from "../util/useCurrentUser";
import { useParams } from "react-router";
import ProfileCard from "../Components/ProfileCard";
import "../Styling/ArtistShow.css"

const ArtistShow = ({
  artwork,
  userObj,
  showEditArtist,
  setShowEditArtist,
  editArtistSuccess,
  setEditArtistSuccess,
}) => {
  const [showEditButton, setShowEditButton] = useState(null);

  const { firebase_uid } = useParams();

  useEffect(() => {
    console.log(userObj)
    const checkEditAuth = async (userObj) => {
      if (currentUser?.firebase_uid === userObj?.firebase_uid) {
        await setShowEditButton(true);
      } else if (!currentUser?.firebase_uid) {
        return;
      }
    };

    checkEditAuth();
  }, [userObj]);

  const currentUser = useCurrentUser();

  return (
    // <div className="artist-show-container">
    <div className="artist-show">

      {/* <h2>Artist Details</h2> */}
      <ProfileCard userObj={userObj}/>
      <ArtworkList artwork={artwork} />
      {/* <div className="artist-details"> */}
        {/* <div className="card"> */}
          {/* <ArtistInfoCard userObj={userObj} /> */}
          {/* {showEditArtist ? (
            <ArtistEditContainer
              userObj={userObj}
              editArtistSuccess={editArtistSuccess}
              setEditArtistSuccess={setEditArtistSuccess}
            />
          ) : null} */}
          {/* {showEditButton ? (
            <button
              onClick={() =>
                showEditArtist
                  ? setShowEditArtist(null)
                  : setShowEditArtist(true)
              }
            >
              Edit
            </button>
          ) : null} */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default ArtistShow;
