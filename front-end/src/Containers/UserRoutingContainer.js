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
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${firebase_uid}`);

        // getting back user
        // user response has key of venues, save venues in state, render venues component
        // passing down venues state into it
        if (res.data.payload.venues) {
          await setIsVenue(true);
          setCurrentUser(res.data.payload.user);
          const action = getUserVenues(res.data.payload.venues);
          dispatch(action);
        } else {
          await setIsVenue(false);
          setCurrentUser(res.data.payload.user);
          const action = getUserArtwork(res.data.payload.userArtwork);
          const action2 = getUser(res.data.payload)
          dispatch(action);
          dispatch(action2);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return isVenue === false ? (
    <div className="artist-show-page">
      <ArtistShow currentUser={currentUser} artwork={artwork} />
    </div>
  ) : (
    <VenueShow currentUser={currentUser} venues={venues} />
  );
};

export default UserRoutingContainer;
