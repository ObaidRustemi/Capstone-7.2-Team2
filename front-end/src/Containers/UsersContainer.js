import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
// import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import Switch from "../Components/Switch"
import "../Styling/Switch.css"
import "../Styling/UsersContainer.css"
import { Link } from "react-router-dom"


const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const [allVenues, setAllVenues] = useState([]);
  const { id, venue_id } = useParams();

  useEffect(() => {
    const fetchVenues = async () => {
      try { 
        let venueRes = await axios.get(`${API}/venues`)
        debugger;
        setAllVenues(venueRes.data.payload)
      } catch (error) {
        
      }
    }
    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/users`); 
        // let res2 = await axios.get(`${API}/users/${id}/venues/${venue_id}`);
        // debugger
        // setCurrentVenue(res2.data.payload.singleUserVenue);
        const action = getUsers(res.data.payload);
        console.log("about to dispatch:::", action);
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    if (users.length === 0) {
      fetchUsers();
      fetchVenues();
    }
  }, [users]);

  const handleToggle = (e) => {
    setToggled(e.target.checked)
  }

  const venues = users.filter(user => user.is_venue)
  const artists = users.filter(user => user.is_artist)
 
  return (
    <div className="users">
      <div>
      <Switch users={users} onChange={handleToggle}/>
      </div>
    <div className="user_display">
    <div>{toggled 
        ? <ul>{artists.map(artist => 
            <li>
               <Link to={`/users/${artist.id}`}>
                  <h3>{artist.username}</h3>
                    <p>{artist.location}</p>
                    <p>{artist.type_of_art}</p>
                </Link>
            </li>)}
         </ul>
        : <ul>{venues.map(venue => 
            <li>
              <Link to={`/users/${venue.id}`}>
                <h3>{venue.username}</h3>
                  <p>{venue.location}</p>
              </Link>
            </li>)}
          </ul>}
      </div>
 {/* <UserIndex users={users} /> */}
    </div> 
    </div>
  )
};

export default UsersContainer;
