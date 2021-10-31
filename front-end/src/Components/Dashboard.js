import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import useCurrentUser from "../util/useCurrentUser";
import "../Styling/Dashboard.css";
import ProfileCard from "./ProfileCard";
import ProfileCardEdit from "./ProfileCardEdit";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  // const currentUser = useSelector(({ users, currentUserUid}) => {
  //   return users.find(user => user.firebase_uid === currentUserUid);
  // });
  const currentUser = useCurrentUser();
  // debugger;
  console.log("DASH", currentUser);
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      {/* <ProfileCard
        username={currentUser.username}
        image={currentUser.image}
        description={currentUser.description}
      /> */}
      <ProfileCardEdit
        username={currentUser.username}
        image={currentUser.image}
        description={currentUser.description}
        location={currentUser.location}
      />

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.username || currentUser.email}
          <strong>UID:</strong> {currentUser.firebase_uid}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="secondary" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
