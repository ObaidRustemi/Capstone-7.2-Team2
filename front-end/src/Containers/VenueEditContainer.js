import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styling/VenueInfoPage.css";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import useCurrentUser from "../util/useCurrentUser";

const API = apiURL();

const VenueEditContainer = ({
  setShowHideButton,
  currentVenue,
  setVenueChange,
  venueChange,
}) => {
  const { venue_id } = useParams();
  const currentUser = useCurrentUser();
  const [editedVenue, setEditedVenue] = useState({
    name: "",
    owner_id: "",
    venue_profile_photo: "",
    venue_info: "",
    price: "",
    address: "",
  });
  const [editPostSuccess, setEditPostSuccess] = useState(null);

  useEffect(() => {
    const setCurrentUser = async (editedVenue) => {
      await setEditedVenue(Object.assign(currentVenue, editedVenue));
    };
    setCurrentUser();
    setShowHideButton(true);
    setVenueChange(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editVenue = async (venue) => {
    const editVenueObject = Object.assign({}, editedVenue);
    editVenueObject.owner_id = currentUser?.firebase_uid;

    try {
      const res = await axios.put(
        `${API}/users/${currentUser?.firebase_uid}/venues/${venue_id}`,
        editVenueObject
      );

      if (res.data.success) {
        debugger;
        setEditPostSuccess(true);
        setTimeout(() => {
          setEditPostSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    editVenue(editedVenue);
    setVenueChange(true);
    setTimeout(() => {
      setVenueChange(false);
    }, 1000);
  };

  const handleTextChange = (e) => {
    setEditedVenue({ ...editedVenue, [e.target.id]: e.target.value });
    setEditPostSuccess(null);
  };

  const { name, venue_profile_photo, venue_info, price, address } = editedVenue;
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
        <label htmlFor="price">price:</label>
        <input
          id="price"
          value={price}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter price of venue"
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
        <input className="venue-edit-button" type="submit" />
        {editPostSuccess ? (
          <h4 className="venue-edit-message">Venue Edit Complete</h4>
        ) : null}
      </form>
    </div>
  );
};

export default VenueEditContainer;
