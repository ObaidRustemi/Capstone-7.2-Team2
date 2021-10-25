import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../Styling/ArtworkInfo.css";
import { apiURL } from "../util/apiURL";
import useCurrentUser from "../util/useCurrentUser";

const API = apiURL();

const ArtistEditContainer = ({setArtistEdit}) => {

  const currentUser = useCurrentUser()
  // debugger
    
    // const [editedVenue, setEditedVenue] = useState({
    //     name: "",
    //     owner_id: "",
    //     venue_profile_photo: "",
    //     venue_info: "", 
    //     address: "",
    //   });

  
    return (
        <div>
          <h4>Edit Artist</h4>  
        </div>
    )
}

export default ArtistEditContainer
