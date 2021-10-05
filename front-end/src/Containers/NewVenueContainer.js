import React, { useEffect, useState } from "react";
import "../Styling/UserIndex.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { apiURL } from "../util/apiURL";
import UploadForm from "../Components/UploadForm";

const API = apiURL();

const NewVenueContainer = ({setShowHideButton}) => {
  const currentUser = useSelector((state) => state.currentUser);
  const [newVenue, setNewVenue] = useState({
    name: "",
    owner_id: "",
    venue_profile_photo: "",
    venue_info: "",
    address: "",
  });
  const [postSuccess, setPostSuccess] = useState(null);
  
  useEffect(()=> {
    setShowHideButton(true)
  },[])

  const addNewVenue = async (newVenue) => {
    const newVenueObject = Object.assign({}, newVenue);
    // newVenueObject.owner_id = currentUser.uid;
    newVenueObject.owner_id = "70h6u5TsjRajXyEiEc7uilMENQ42"
    try {
      const res = await axios.post(
        `${API}/users/${currentUser.uid}/venues`,
        newVenueObject
      );
      if (res.data.success) {
        setPostSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewVenue(newVenue);
   
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
        <UploadForm />
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
        <input type="submit" />
      </form>
      {postSuccess ? <h4>Venue Added</h4> : null}
    </div>
  );
};

export default NewVenueContainer;