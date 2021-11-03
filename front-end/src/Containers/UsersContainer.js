import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiURL } from "../util/apiURL";
import { getUsers } from "../Actions/userActions";
import axios from "axios";
import Switch from "../Components/Switch";
import "../Styling/Switch.css";
import "../Styling/UsersContainer.css";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const API = apiURL();

const UsersContainer = () => {
  const users = useSelector(({ users }) => users);

  // const currentUser = useCurrentUser()

  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const [allVenues, setAllVenues] = useState([]);
  

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div >
            {toggled ? (
              <ul className="filter-artist-ul">
                {users
                  .filter((user) => user.is_artist)
                  .map((artist) => (
                    <li key={artist.firebase_uid}>
                      <Link to={`/users/${artist.firebase_uid}`}>
                        <Card style={{ width: "250px"  }}>
                          <Card.Img
                            variant="top"
                            src={artist.image}
                            className="artist_img"
                          />
                          <Card.Body>
                              <h4>{artist.username}</h4>
                              <h5>{artist.type_of_art}</h5>
                              <p>{artist.location}</p>
                            {artist.status === "Available" ? <p style={{color:"green"}}>{artist.status}</p>: <p style={{color:"red"}}>{artist.status} </p>}
                          </Card.Body>
                        </Card>
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : (
              <ul className="filter-venue-ul">
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
                            <h4>{venue.name}</h4>
                            <p>{venue.address}</p>
                            <p><strong>Price:</strong> ${venue.price}</p>
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
