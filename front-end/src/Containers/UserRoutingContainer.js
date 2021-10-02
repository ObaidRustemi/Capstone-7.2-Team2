import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUser, getUserVenues, getArtworks } from "../Actions/userActions";

import VenueShow from "../Pages/VenueShow";
import ArtistShow from "../Pages/ArtistShow";
import axios from "axios";

const API = apiURL();

const UserRoutingContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const user = useSelector((state) => state.user);
  const venues = useSelector((state) => state.venues);
  const artwork = useSelector((state) => state.artwork);
  const [isVenue, setIsVenue] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}`);

        // getting back user
        // user response has key of venues, save venues in state, render venues component
        // passing down venues state into it
        if (res.data.payload.venues) {
          await setIsVenue(true);
          // if(!venues.length) {
            const action = getUserVenues(res.data.payload.venues);
            dispatch(action);
            debugger
          // }
          debugger;
        } else {
          await setIsVenue(false);
          const action = getArtworks(res.data.payload.userArtwork);

          dispatch(action);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return isVenue === false ? (
    <ArtistShow artwork={artwork} />
  ) : (
    <VenueShow venues={venues} />
  );
};

export default UserRoutingContainer;
