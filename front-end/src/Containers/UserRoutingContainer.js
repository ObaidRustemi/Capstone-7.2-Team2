import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUserVenues, getUserArtwork, getUser } from "../Actions/userActions";

import VenueShow from "../Pages/VenueShow";
import ArtistShow from "../Pages/ArtistShow";
import axios from "axios";
import "../Styling/ArtworkIndex.css";


const API = apiURL();

const UserRoutingContainer = () => {
  const dispatch = useDispatch();
  const { firebase_uid } = useParams();

  const venues = useSelector((state) => state.venues);
  const artwork = useSelector((state) => state.artwork);
  const [isVenue, setIsVenue] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [showAddVenue, setShowAddVenue] = useState(null);
  const [newVenueAdded, setNewVenueAdded] = useState(null)
  const [showEditArtist, setShowEditArtist] = useState(null)

  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${firebase_uid}`);
        
        if (res.data.payload.venues) {
          await setIsVenue(true);
          setUserObj(res.data.payload.user);
          const action = getUserVenues(res.data.payload.venues);
          dispatch(action);
        } else {
          await setIsVenue(false);
          setUserObj(res.data.payload.user);
          const action = getUserArtwork(res.data.payload.userArtwork);
          const action2 = getUser(res.data.payload);
          dispatch(action);
          dispatch(action2);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newVenueAdded]);

  return isVenue === false ? (
    <div className="artist-show-page">
<<<<<<< HEAD
      <ArtistShow userObj={userObj} artwork={artwork} />
=======
      <ArtistShow userObj={userObj} artwork={artwork} showEditArtist={showEditArtist} setShowEditArtist={setShowEditArtist}/>
>>>>>>> main
    </div>
  ) : (
    <VenueShow
      venues={venues}
      showAddVenue={showAddVenue}
      setShowAddVenue={setShowAddVenue}
      newVenueAdded={newVenueAdded}
      setNewVenueAdded={setNewVenueAdded}
    />
  );
};

export default UserRoutingContainer;
