import React, { useState, useEffect } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const { id } = useParams();

  // if(currentUser) {
  //   debugger
  //   console.log(currentUser.displayName)
  //   debugger
  // }


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await currentUser.username
        debugger;
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])
  

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <strong>UID:</strong> {currentUser.uid}
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
