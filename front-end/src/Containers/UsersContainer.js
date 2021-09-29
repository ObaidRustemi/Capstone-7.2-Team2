import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import { Button } from "react-bootstrap";
import Switch from "../Components/Switch"
import "../Styling/Switch.css"

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  // const [isToggled, setIsToggled] = useState(false);

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
    if(users.length === 0){
      fetchUsers();
    }
  }, []);
  

  //  const handleCheckboxChange = async () => {
  //   let res = await axios.get(`${API}/users`); 
  //       const action = getUsers(res.data.payload.filter((item) => item.is_venue));
  //       debugger;
  //       console.log("about to dispatch:::", action);
  //       dispatch(action);
  // };

  // const handleClick = () => {
  //   setToggle({toggle: !toggle})
  // }

  // const handleToggle = () => {
  //   setIsToggled({isToggled: !isToggled})
  // }

  const handleToggle = (e) => {
    setToggled(e.target.checked)
  }

  const venues = users.filter(user => user.is_venue)
  const artists = users.filter(user => user.is_artist)

  ///useState for user to render 
  //make toggle instead 
  return (
    <div>
      {/* {toggle && <>Aritsit</>} */}
      {/* <Button onClick={handleClick}>Venues </Button> */}
    <Switch users={users} onChange={handleToggle}/>
    <p>{toggled ? <ul>{artists.map(venue => <li>{venue.username}</li>)}</ul> :  <ul>{venues.map(venue => <li>{venue.username}</li>)}</ul>}</p>
      {/* <UserIndex users={users} /> */}

    </div>
  )
};

export default UsersContainer;
