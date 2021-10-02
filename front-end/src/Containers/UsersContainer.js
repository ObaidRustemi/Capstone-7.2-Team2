import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
// import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import Switch from "../Components/Switch"
import "../Styling/Switch.css"
import { Link } from "react-router-dom"

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/users`); 
        const action = getUsers(res.data.payload);
        console.log("about to dispatch:::", action);
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    if (users.length === 0) {
      fetchUsers();
    }
  }, []);

  const handleToggle = (e) => {
    setToggled(e.target.checked)
  }

  const venues = users.filter(user => user.is_venue)
  const artists = users.filter(user => user.is_artist)
 
  return (
    <div>
    <Switch users={users} onChange={handleToggle}/>
    <p>{toggled 
        ? <ul>{artists.map(artist => <li><Link to={`/users/${artist.id}`}>{artist.username}</Link></li>)} </ul>
        :  <ul>{venues.map(venue => <li><Link to={`/users/${venue.id}`}>{venue.username}</Link></li>)}</ul>}</p>
    </div>
  )
};

export default UsersContainer;
