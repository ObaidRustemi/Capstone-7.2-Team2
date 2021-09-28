import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
import UserIndex from "../Pages/UserIndex";
import axios from "axios";

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

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
    fetchUsers();
  }, []);

  return <UserIndex users={users} />;
};

export default UsersContainer;
