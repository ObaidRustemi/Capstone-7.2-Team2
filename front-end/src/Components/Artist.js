import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useParams } from "react-router-dom";
import useCurrentUser from "../util/useCurrentUser";

const API = apiURL();

const Artist = () => {
  const [artist, setArtist] = useState({});
  const [artwork, setArtwork] = useState({});
  const { id } = useParams();
  // const currentUser = useSelector((state)=> console.log(state))
  const currentUser = useCurrentUser();
  const firebase_uid = currentUser.firebase_uid
  const fetchArtist = async () => {
    try {
      const artistRes = await axios.get(`${API}/users/${firebase_uid}`);
      setArtist(artistRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtwork = async () => {
    try {
      const artworkRes = await axios.get(
        `${API}/users/${firebase_uid}/artwork`
      );

      setArtwork(artworkRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtist();
    fetchArtwork();
  }, []);

  return (
    <div>
      <h1> artist page </h1>
      <UploadForm />
    </div>
  );
};

export default Artist;
