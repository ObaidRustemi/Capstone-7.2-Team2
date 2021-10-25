import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import useCurrentUser from "../util/useCurrentUser";
import "../Styling/Dashboard.css";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  // const currentUser = useSelector(({ users, currentUserUid}) => {
  //   return users.find(user => user.firebase_uid === currentUserUid);
  // });
  const currentUser = useCurrentUser();
  debugger;
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
      <div>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={currentUser.image}
                  alt={""}
                />
                <span className="font-weight-bold">{currentUser.username}</span>
                <span className="text-black-50">{currentUser.location}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="surname"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Postcode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">About me</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Education</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="education"
                      value=""
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="state"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            {/*<div className="col-md-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience">
                  <span>Edit Experience</span>
                  <span className="border px-3 p-1 add-experience">
                    <i className="fa fa-plus"></i>&nbsp;Experience
                  </span>
                </div>
                <br />
                <div className="col-md-12">
                  <label className="labels">Experience in Designing</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="experience"
                    value=""
                  />
                </div>{" "}
                <br />
                <div className="col-md-12">
                  <label className="labels">Additional Details</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="additional details"
                    value=""
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
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
