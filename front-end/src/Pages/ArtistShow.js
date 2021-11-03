import React, { useState, useEffect } from "react";
import "../Styling/ArtworkIndex.css";
import ArtistEditContainer from "../Containers/ArtistEditContainer";
import ArtworkList from "../Components/ArtworkList";
import ArtistInfoCard from "../Components/ArtistInfoCard";
// import useCurrentUser from "../util/useCurrentUser";
import Contact from "../Components/Contact";
import { useParams } from "react-router";
import ProfileCard from "../Components/ProfileCard";
import "../Styling/ArtistShow.css"
import { async } from "@firebase/util";

const ArtistShow = ({
  artwork,
  userObj,
  showEditArtist,
  setShowEditArtist,
  editArtistSuccess,
  setEditArtistSuccess,
  currentUser,
}) => {
  const [showEditButton, setShowEditButton] = useState(null);

  const { firebase_uid } = useParams();
  // const currentUser = useCurrentUser();

  const checkLogin = async () => {
    if (!currentUser?.firebase_uid) {
      debugger
      return await setShowEditButton(false);
    }
  };

  useEffect(() => {
    const checkEditAuth = async () => {
      if (currentUser?.firebase_uid === userObj.firebase_uid) {
        debugger;
        await setShowEditButton(true);
        // await setShowEditArtist(true);
      } else if (currentUser?.firebase_uid !== userObj?.firebase_uid) {
        debugger;
        await setShowEditButton(false);
        // await setShowEditArtist(false);
      }
    };
    checkLogin();
    checkEditAuth();
  }, [userObj]);

  return (
    // <div className="artist-show-container">
    <div className="artist-show">

      {/* <h2>Artist Details</h2> */}
      <ProfileCard userObj={userObj}/>
      <ArtworkList artwork={artwork} />
      <div className="artist-details">
        <div className="card">
          <ArtistInfoCard userObj={userObj} />
          
        </div>
          {showEditButton ? (
            <button className="artist-edit-button"
              onClick={() =>
                showEditArtist
                  ? setShowEditArtist(null)
                  : setShowEditArtist(true)
              }
            >
              Edit
            </button>
          ) : null}
      </div>
          {showEditArtist ? (
            <ArtistEditContainer
              userObj={userObj}
              editArtistSuccess={editArtistSuccess}
              setEditArtistSuccess={setEditArtistSuccess}
            />
          ) : null}
      <Contact />
    </div>
  );
};

export default ArtistShow;
