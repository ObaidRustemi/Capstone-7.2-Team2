import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArtworkShow from "../Pages/ArtworkShow";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUser } from "../Actions/userActions";
import axios from "axios";
import "../Styling/ArtworkInfo.css";

const API = apiURL();

const ArtworkInfoContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(`${API}/users/${id}`);
       
        const action = getUser(res.data.payload);
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser()
  }, []);

  return (
    <div className="artwork-info-container">
      <ArtworkShow user={user} />
    </div>
  );
};

export default ArtworkInfoContainer;
