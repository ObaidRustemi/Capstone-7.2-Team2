import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styling/UserIndex.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { apiURL } from "../util/apiURL";
import UploadForm from "../Components/UploadForm";
import useCurrentUser from "../util/useCurrentUser";

const API = apiURL();

const NewVenueContainer = ({
  setShowHideButton,
  newVenueAdded,
  setNewVenueAdded,
}) => {
  const currentUser = useCurrentUser();
  const uploadUrl = useSelector((state) => state.uploadUrl);
  const [newVenue, setNewVenue] = useState({
    name: "",
    owner_id: "",
    venue_profile_photo: "",
    venue_info: "",
    address: "",
  });
  const [postSuccess, setPostSuccess] = useState(null);
  const { firebase_uid } = useParams();

  useEffect(() => {
    setShowHideButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewVenue = async (newVenue) => {
    const newVenueObject = Object.assign({}, newVenue);
    newVenueObject.owner_id = firebase_uid;
    debugger;

    try {
      const res = await axios.post(
        `${API}/users/${firebase_uid}/venues`,
        newVenueObject
      );
      if (res.data.success) {
        setPostSuccess(true);
        setTimeout(() => {
          setPostSuccess(null);
        }, 2000);
        setNewVenue({
          name: "",
          owner_id: "",
          venue_profile_photo: "",
          venue_info: "",
          address: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewVenue({ ...newVenue, venue_profile_photo: uploadUrl });
    addNewVenue(newVenue);
    setNewVenueAdded(true);
    setTimeout(() => {
      setNewVenueAdded(null);
    }, 1000);
  };
  const handleTextChange = (e) => {
    setNewVenue({ ...newVenue, [e.target.id]: e.target.value });

    setPostSuccess(null);
  };
  const { name, venue_profile_photo, venue_info, address } = newVenue;
  return (
    <div className="new-venue-container">
      <h2>Add Venue</h2>
      <form className="forms-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Venue Name:</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={handleTextChange}
          placeholder="Full Name"
          //   required
        />
        <label htmlFor="venue_profile_photo">Profile Photo:</label>
        <input
          id="venue_profile_photo"
          value={venue_profile_photo}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a URL"
          //   required
        />
        <label htmlFor="venue_info">Description:</label>
        <textarea
          id="venue_info"
          value={venue_info}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter venue information"
          //   required
        />
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          value={address}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter city + state"
          //   required
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
      {postSuccess ? <h4>Venue Added</h4> : null}

      <UploadForm />
    </div>
  );
};

export default NewVenueContainer;
