import { useState, useEffect } from "react";
import useCurrentUser from "../util/useCurrentUser";

export default function VenueOwnerShow() {
  
  const currentUser = useCurrentUser()

  const [updatedInfo, setUpdatedInfo] = useState({
    name: "",
    preference: "",
    description: "",
    phoneNumber: 0,
    location: "",
    is_venue: "",
    is_artist: ""
  });


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


  const handleSubmit = (e) => {
    e.preventDefault();
   
  };


  useEffect(() => {
      
  }, [])

  const { name, preference, description, phoneNumber, location } = updatedInfo;

  return (
    <div>
      <div>
          <div> LOGO</div>
          <p>Name</p>
          <section>
              <p>Preferred</p>
              <p>Description</p>
              <p>Number</p>
              <p>location</p>
          </section>
      </div>
    </div>
  );
}
