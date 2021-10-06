import React, { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const currentUser = useSelector((state) => state.currentUser);
  // const user = useSelector((state) => state.user);
  const history = useHistory();
  const newUser = useSelector((state) => state.newUser);


  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  if (!newUser) {
    return null
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <strong>UID:</strong> {currentUser.uid}
          <p>{newUser.username}</p>
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
    </>
  );
}
