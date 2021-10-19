import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
// import UserIndex from "../Pages/UserIndex";
import axios from "axios";
import Switch from "../Components/Switch";
import "../Styling/Switch.css";
import "../Styling/UsersContainer.css";
import { Link } from "react-router-dom";
import { Image, Card, Container } from "react-bootstrap";

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector((state) => console.log(state))
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const [allVenues, setAllVenues] = useState([]);
  const [artists, setArtists] = useState([]);
  const { id, venue_id } = useParams();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        let venueRes = await axios.get(`${API}/allvenues`);
        setAllVenues(venueRes.data.payload);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUsers = async () => {
      try {
        let res = await axios.get(`${API}/users`);
        const action = getUsers(res.data.payload);
        console.log("about to dispatch:::", action);
        await dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    fetchVenues();
  }, []);

  const handleToggle = (e) => {
    setToggled(e.target.checked);
  };

  if (users.length === 0) {
    return null;
  }

  // debugger
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
                {users
                  .filter((user) => user.is_artist)
                  .map((artist) => (
                    <li>
                      <Link to={`/users/${artist.firebase_uid}`}>
                        <Card style={{ width: "250px" }}>
                          <Card.Img
                            variant="top"
                            src={artist.image}
                            className="artist_img"
                          />
                          <Card.Body>
                            <Card.Text>
                              <h3>{artist.username}</h3>
                              <h5>{artist.type_of_art}</h5>
                              <p>{artist.location}</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <ul>
                {allVenues.map((venue) => (
                  <li key={venue.id}>
                    <Link to={`/users/${venue.owner_id}/venues/${venue.id}`}>
                      <Card style={{ width: "350px" }}>
                        <Card.Img
                          variant="top"
                          src={venue.venue_profile_photo}
                          className="venue_img"
                        />
                        <Card.Body>
                          <Card.Text>
                            <h3>{venue.name}</h3>
                            <p>{venue.address}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
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
