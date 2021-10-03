import React, { useEffect, useState } from "react";
import "../Styling/UserIndex.css";
import axios from "axios"
import VenueList from "../Components/VenueList";
import NewVenueContainer from "../Containers/NewVenueContainer";
import { useSelector  } from "react-redux";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const VenueShow = ({ venues }) => {
  // const currentUser = useSelector((state) => state.currentUser);
  // const [newVenue, setNewVenue ] = useState({
  //   name: "",
  //   owner_id: "",
  //   venue_profile_photo: "",
  //   venue_info: "",
  //   address: ""
  // })


  // const addNewVenue = async (newVenue) =>{
  //     const newVenueObject = Object.assign({}, newVenue)
  //     newVenueObject.owner_id = currentUser.uid
  //     try {
  //       const res = await axios.post(`${API}/users`)
  //       debugger
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  // const handleTextChange = (e) => {
  //   setNewVenue({ ...newVenue, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addNewVenue(newVenue);
  // };

  // const { name, venue_profile_photo, venue_info, address } = newVenue;
  return (
    <div className="user-show-container">
      <h3>Venue Owner Details</h3>
      <VenueList venues={venues} />
      <NewVenueContainer />
      {/* <form onSubmit={handleSubmit}>
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
          placeholder="Enter venue address"
          //   required
        />
        <label htmlFor="venue_info">Describe The Place:</label>
        <input
          id="venue_info"
          value={venue_info}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter venue venue_info"
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
      </form> */}
    </div>
  );
};

export default VenueShow;
