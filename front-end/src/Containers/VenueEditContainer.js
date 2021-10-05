import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styling/VenueInfoPage.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const VenueEditContainer = () => {
  const { venue_id } = useParams();
  const currentUser = useSelector((state) => state.currentUser);
  const [editedVenue, setEditedVenue] = useState({
    name: "",
    owner_id: "",
    venue_profile_photo: "",
    venue_info: "",
    address: "",
  });
  const [editPostSuccess, setEditPostSuccess] = useState(null);

  // useEffect(()=> {
  //     setShowHideButton(true)
  //   },[])

  const editVenue = async (venue) => {
    const editVenueObject = Object.assign({}, editedVenue);
    // editVenueObject.owner_id = currentUser.uid;
    editVenueObject.owner_id = 'C8QFbExthBMvPkGZ2CtM13bcWoi1'
    try {
      const res = await axios.put(
        `${API}/users/${currentUser.uid}/venues/${venue_id}`,
        editVenueObject
      );
      debugger
      if (res.data.success) {
        setEditPostSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editVenue(editedVenue);
  };

  const handleTextChange = (e) => {
    setEditedVenue({ ...editedVenue, [e.target.id]: e.target.value });
    setEditPostSuccess(null);
  };

  const { name, venue_profile_photo, venue_info, address } = editedVenue;
  return (
    <div className="edit-venue-container">
      <h2>Edit Venue</h2>
      <form className="edit-forms-container" onSubmit={handleSubmit}>
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
        <input type="submit" />
      </form>
      {editPostSuccess ? <h4>Venue Edit Complete</h4> : null}
    </div>
  );
};

export default VenueEditContainer;