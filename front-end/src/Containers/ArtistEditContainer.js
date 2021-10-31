import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import useCurrentUser from "../util/useCurrentUser";
import "../Styling/ArtworkInfo.css";

const API = apiURL();

const ArtistEditContainer = ({ editArtistSuccess, setEditArtistSuccess, userObj }) => {
  const [editedArtist, setEditedArtist] = useState({
    username: "",
    image: "",
    type_of_art: "",
    artist_info: "",
    location: "",
  });

  
  const currentUser = useCurrentUser();
  // let currentArtist =  Object.assign({}, userObj);
  // const { firebase_uid } = useParams();

  useEffect(() => {
    const setCurrentUser = async (editedArtist) => {
      await setEditedArtist(Object.assign(userObj, editedArtist));
    };
    setCurrentUser();
  }, []);    

  const editArtist = async (editedArtist) => {
   
    const editArtistObject = await Object.assign({}, editedArtist);
    try {
      const res = await axios.put(
        `${API}/users/${currentUser?.firebase_uid}`,
        editArtistObject
      );
      if (res.data.success) {
        await setEditArtistSuccess(true);
        setTimeout(() => {
          setEditArtistSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    editArtist(editedArtist);
    // setVenueChange(true)
    // setTimeout(()=> {
    //     setVenueChange(false)
    // }, 1000)
  };

  const handleTextChange = (e) => {
    setEditedArtist({ ...editedArtist, [e.target.id]: e.target.value });
    setEditArtistSuccess(null);
  };

  const { username, image, type_of_art, description, location } = editedArtist;
  return (
    <div className="edit-artist-container">
      <h4>Edit Artist</h4>
      <form className="edit-forms-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist Name"
          //   required
        />
        <label htmlFor="artist_profile_photo">Profile Photo:</label>
        <input
          id="image"
          value={image}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter URL for profile picture"
          //   required
        />
        <label htmlFor="type_of_art">Type of Art:</label>
        <input
          id="type_of_art"
          value={type_of_art}
          type="text"
          onChange={handleTextChange}
          placeholder="Please describe your art style"
          //   required
        />
        <label htmlFor="Artist_info">Artist Information:</label>
        <textarea
          id="description"
          value={description}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist information"
          //   required
        />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          value={location}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter city + state"
          //   required
        />
        <input type="submit" />
      </form>
      {editArtistSuccess ? <h4>Artist Edit Complete</h4> : null}
    </div>
  );
};

export default ArtistEditContainer;
