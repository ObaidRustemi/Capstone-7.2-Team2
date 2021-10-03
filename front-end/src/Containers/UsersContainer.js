import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import Switch from "../Components/Switch";
import "../Styling/Switch.css";
import "../Styling/UsersContainer.css";
import { Link } from "react-router-dom";
import { Image, Card, Container } from "react-bootstrap";

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const [allVenues, setAllVenues] = useState([]);
  const { id, venue_id } = useParams();
  const [artists, setArtists] = useState([])

  useEffect(() => {
  
    debugger;
    const fetchVenues = async () => {
      try {
        let venueRes = await axios.get(`${API}/allvenues`);
        debugger;
        setAllVenues(venueRes.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/users`);
        const action = getUsers(res.data.payload);
        debugger;
        console.log("about to dispatch:::", action);
        await dispatch(action);
        debugger;
      } catch (error) {
        console.log(error);
      }
    };
    // if (users.length === 0) {
      fetchUsers();
      fetchVenues();
    // }
  }, [toggled]);

  const handleToggle = (e) => {
    setToggled(e.target.checked);
  };

  // const venues = users.filter(user => user.is_venue)
  // const allVenuesList = allVenues.map(item => item)
  // console.log(allVenuesList)
  if(users.length === 0){
    return null 
  }
  
  return (
    <div className="users">
      <div>
        <Switch users={users} onChange={handleToggle} />
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="user_display">
          <div>
            {toggled ? (
              <ul>
                {users.filter((user) => user.is_artist).map((artist) => (
                  <li>
                    <Link to={`/users/${artist.id}`}>
                      <img src={artist.image} />
                      <h3>{artist.username}</h3>
                      <h4>{artist.type_of_art}</h4>
                      <h5>{artist.location}</h5>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {allVenues.map((venue) => (
                  <li key={venue.id}>
                    <Link to={`/users/${venue.owner_id}/venues/${venue.id}`}>
                      <Card style={{ width: "250px" }}>
                        <Card.Img
                          variant="top"
                          src={venue.venue_profile_photo}
                        />
                        <Card.Body>
                          <Card.Text>
                            <h3>{venue.name}</h3>
                            <p>{venue.address}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                    {/* <Link to={`/users/${venue.owner_id}/venues/${venue.id}`}>
                    <img src={venue.venue_profile_photo} />
                    <h3>{venue.name}</h3>
                    <p>{venue.address}</p>
                  </Link> */}

                    {/* <Link to={`/users/${venue.id}`}>
                <h3>{venue.username}</h3>
                  <p>{venue.location}</p>
              </Link> */}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <UserIndex users={users} /> */}
        </div>
      </Container>
    </div>
  );
};

export default UsersContainer;
