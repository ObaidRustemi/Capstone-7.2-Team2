import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUser, getArtwork } from "../Actions/userActions";

import ArtworkIndex from "../Pages/ArtworkIndex";
import ArtistShow from "../Pages/ArtistShow";
import axios from "axios";


const API = apiURL();

const ArtworkArtistContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const user = useSelector((state) => state.user);
  const artwork = useSelector((state) => state.artworks);

  useEffect(() => {
    const fetchArtworkForUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}/artwork`);

        const action = getArtwork(res.data.payload);

        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtworkForUser();
  }, []);
  return artwork.length === 0 ? <ArtistShow /> : <ArtworkIndex artworks={artworks} />;
};

export default ArtworkArtistContainer;