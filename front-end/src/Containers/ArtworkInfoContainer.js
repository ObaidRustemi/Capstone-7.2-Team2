import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArtworkShow from "../Pages/ArtworkShow";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getSingleArtwork } from "../Actions/userActions";
import axios from "axios";
import "../Styling/ArtworkInfo.css";

const API = apiURL();

const ArtworkInfoContainer = () => {
  // const dispatch = useDispatch();
  const { id, artwork_id } = useParams();
  const [image, setImage] = useState([]);

  // const singleArtwork = useSelector((state) => state.singleArtwork);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}/artwork/${artwork_id}`);
        // debugger

        await setImage(res.data);
        // const action = getSingleArtwork(res.data.payload);
        // dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtwork();
  }, []);

  return (
    <div className="artwork-info-container">
      <ArtworkShow image={image} />
    </div>
  );
};

export default ArtworkInfoContainer;
