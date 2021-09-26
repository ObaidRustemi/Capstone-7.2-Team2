import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useParams } from "react-router-dom";

const API = apiURL();

const Artist = () => {
  const [artist, setArtist] = useState({});
  const [artwork, setArtwork] = useState({});
  const { id } = useParams();

  const fetchArtist = async () => {
    try {
      const artistRes = await axios.get(`${API}/users/${id}`);
      setArtist(artistRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtwork = async () => {
    try {
      const artworkRes = await axios.get(`${API}/users/${id}/artwork`);

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
    </div>
  );
};

export default Artist;
