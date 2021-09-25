import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUser, getVenues } from "../Actions/userActions";

import VenueShow from "../Pages/VenueShow";
import ArtistShow from "../Pages/ArtistShow";
import axios from "axios";

const API = apiURL();

const VenueOwnerContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const user = useSelector((state) => state.user);
  const venues = useSelector((state) => state.venues);

  useEffect(() => {
    const fetchVenuesForUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}/venues`);

        const action = getVenues(res.data.payload);

        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVenuesForUser();
  }, []);
  return venues.length === 0 ? <ArtistShow /> : <VenueShow venues={venues} />;
};

export default VenueOwnerContainer;
