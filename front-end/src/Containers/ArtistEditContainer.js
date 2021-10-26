// import React from "react";
// import { useParams } from "react-router";
import "../Styling/ArtworkInfo.css";
<<<<<<< HEAD
// import { apiURL } from "../util/apiURL";

// const API = apiURL();

const ArtistEditContainer = ({setArtistEdit, currentUser}) => {
    // const { artist_id } = useParams();
    // const [editedVenue, setEditedVenue] = useState({
    //     name: "",
    //     owner_id: "",
    //     venue_profile_photo: "",
    //     venue_info: "", 
    //     address: "",
    //   });

    //   debugger
=======
import { apiURL } from "../util/apiURL";
import useCurrentUser from "../util/useCurrentUser";

// const API = apiURL();

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
>>>>>>> main
    return (
        <div>
          <h4>Edit Artist</h4>  
        </div>
    )
}

export default ArtistEditContainer
