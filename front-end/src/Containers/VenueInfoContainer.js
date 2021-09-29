import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { getVenueImages } from "../Actions/userActions";

import VenueInfoPage from "../Pages/VenueInfoPage";
const API = apiURL();

const VenueInfoContainer = () => {
  const dispatch = useDispatch();
  const { id, venue_id } = useParams();

  const venueImages = useSelector((state) => state.venueImages);
  const [currentVenue, setCurrentVenue] = useState({});

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}/venues/${venue_id}`);
    
        setCurrentVenue(res.data.payload.singleUserVenue);

        const action = getVenueImages(res.data.payload.allImagesForVenue);

        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVenue();
  }, []);

  return (
    <VenueInfoPage currentVenue={currentVenue} venueImages={venueImages} />
  );
};

export default VenueInfoContainer;
