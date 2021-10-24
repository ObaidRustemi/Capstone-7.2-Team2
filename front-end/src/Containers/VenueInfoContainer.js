import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { getVenueImages } from "../Actions/userActions";

import VenueInfoPage from "../Pages/VenueInfoPage";
// import useCurrentUser from "../util/useCurrentUser";
const API = apiURL();

const VenueInfoContainer = () => {
  // const currentUser = useCurrentUser()
  // const firebase_uid = currentUser.firebase_uid
  const dispatch = useDispatch();
  const { id, venue_id } = useParams();

  const venueImages = useSelector((state) => state.venueImages);
  const [currentVenue, setCurrentVenue] = useState({});
  const [selectedImg, setSelectedImg] = useState(false);
  const [venueChange, setVenueChange] = useState(null)

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}/venues/${venue_id}`);
        setCurrentVenue(res.data.payload.singleUserVenue);
        const action = getVenueImages(res.data.payload.allImagesForVenue);
        // if (!venueImages) {
          dispatch(action);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVenue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venueChange]);

  return (
    <VenueInfoPage 
    selectedImg={selectedImg} 
    setSelectedImg={setSelectedImg} 
    currentVenue={currentVenue} 
    venueImages={venueImages} 
    setVenueChange={setVenueChange}
    venueChange={venueChange}
    />
  );
};

export default VenueInfoContainer;
