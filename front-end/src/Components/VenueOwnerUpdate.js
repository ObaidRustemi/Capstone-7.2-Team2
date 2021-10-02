import { useState, useEffect } from "react";
import { useSelector  } from "react-redux";
// import UploadForm from "./UploadForm";

export default function VenueOwnerUpdate() {
  //    const [name, setName] = useState({})
  //    const [preference, setPreference] = useState({})
  //    const [description, setDescription] = useState({})
  //    const [phoneNumber, setPhoneNumber] = useState({})
  //    const [location, setLocation] = useState({})

  const [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    preference: "",
    description: "",
    phoneNumber: 0,
    location: "",
  });

  const currentUser = useSelector((state) => state.currentUser);

  const updateVenueOwner = async (updatedInfo) => {
    try {
        // currentUser
        // debugger
        console.log(currentUser)
    //   await axios.put(`${API}/info/${id}`, updatedInfo);
    //   history.push(`/songs/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = (e) => {
    debugger
    setUpdatedInfo({ ...updatedInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVenueOwner(updatedInfo);
  };

  const { name, preference, description, phoneNumber, location } = updatedInfo;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={handleTextChange}
          placeholder="Full Name"
          //   required
        />
        <label htmlFor="preference">Preferred Type of Art:</label>
        <input
          id="preference"
          value={preference}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter venue address"
          //   required
        />
        <label htmlFor="description">Describe Yourself:</label>
        <input
          id="description"
          value={description}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter venue description"
          //   required
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          id="phoneNumber"
          value={phoneNumber}
          type="number"
          onChange={handleTextChange}
          placeholder="Enter a phone-number"
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
      </form>
    </div>
  );
}
