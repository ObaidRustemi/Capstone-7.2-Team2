// import { useState, useEffect } from "react";
// import useCurrentUser from "../util/useCurrentUser";

// export default function VenueOwnerShow() {

//   const currentUser = useCurrentUser()

//   const [updatedInfo, setUpdatedInfo] = useState({
//     name: "",
//     preference: "",
//     description: "",
//     phoneNumber: 0,
//     location: "",
//     is_venue: "",
//     is_artist: ""
//   });

//   const updateVenueOwner = async (updatedInfo) => {
//     try {
//         // currentUser
//         // debugger
//         console.log(currentUser)
//     //   await axios.put(`${API}/info/${id}`, updatedInfo);
//     //   history.push(`/songs/${id}`);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   };

//   useEffect(() => {

//   }, [])

//   const { name, preference, description, phoneNumber, location } = updatedInfo;

//   return (
//     <div>
//       <div>
//           <div> LOGO</div>
//           <p>Name</p>
//           <section>
//               <p>Preferred</p>
//               <p>Description</p>
//               <p>Number</p>
//               <p>location</p>
//           </section>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styling/VenueInfoPage.css";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import useCurrentUser from "../util/useCurrentUser";

const API = apiURL();

const VenueOwnerShow = ({ userObj }) => {
  const { venue_id } = useParams();
  const currentUser = useCurrentUser();
  const [editOwnerSuccess, setEditOwnerSuccess] = useState();
  // const [editedOwner, setEditedOwner] = useState(Object.assign({},userObj))

  const [editedOwner, setEditedOwner] = useState({
    id: null,
    username: "",
    image: "",
    description: "",
    phone_number: "",
    location:"",
    is_venue: "",
    is_artist: "",
  });
  // debugger;
  const [editPostSuccess, setEditPostSuccess] = useState(null);

  useEffect( () => {
    const setCurrentOwner = async (editedOwner) => {
      await setEditedOwner(Object.assign(userObj, editedOwner));
    };
    setCurrentOwner();
    // setShowHideButton(true);
    // setVenueChange(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editOwner = async (editedOwner) => {
    // const editOwnerObject = await Object.assign({}, editedOwner);

    // editOwnerObject.owner_id = currentUser?.firebase_uid
    // editOwnerObject.id = userObj.id
    try {
      const res = await axios.put(
        `${API}/users/${currentUser.firebase_uid}`,
        editedOwner
      );

      if (res.data.success) {
        setEditOwnerSuccess(true);
        setTimeout(() => {
          setEditOwnerSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    // debugger
    editOwner(editedOwner);

    // setVenueChange(true)
    // setTimeout(()=> {
    //     setVenueChange(false)
    // }, 1000)
  };

  const handleTextChange = (e) => {
    // debugger;
    setEditedOwner(
      Object.assign({}, editedOwner, { [e.target.id]: e.target.value })
    );
    // { ...editedOwner, [e.target.id]: e.target.value });
    debugger;
    // setEditPostSuccess(null);
  };

  const { username, image, phone_number, description, location } = editedOwner;
  return (
    <div className="edit-venue-container">
      <h2>Edit My Profile</h2>
      <form className="edit-forms-container" onSubmit={handleSubmit}>
        <label htmlFor="username">User Name:</label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={handleTextChange}
          placeholder="User name"
          //   required
        />
        <label htmlFor="image">Profile Photo:</label>
        <input
          id="image"
          value={image}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a URL"
          //   required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter venue information"
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
      {editOwnerSuccess ? <h4>Profile Edit Complete</h4> : null}
    </div>
  );
};

export default VenueOwnerShow;
