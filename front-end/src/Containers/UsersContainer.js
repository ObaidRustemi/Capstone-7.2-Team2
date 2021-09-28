import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import { Form } from "react-bootstrap";

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

   const handleCheckboxChange = async () => {
    let res = await axios.get(`${API}/users`); 
        const action = getUsers(res.data.payload.filter((item) => item.is_venue));
        debugger;
        console.log("about to dispatch:::", action);
        dispatch(action);
  };

  ///useState for user to render 
  //make toggle instead 
  return (
    <div>
      <Form>
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Find venues`}
        onChange={handleCheckboxChange}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Find artists`}
      />

    </div>
  ))}
</Form>
  
      <UserIndex users={users} />

    </div>
  )
};

export default UsersContainer;
