import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { useDispatch } from "react-redux";
import { newUser } from "../Actions/userActions";

const API = apiURL();

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState({
    username: null,
    firebase_uid: null,
    phone_number: null,
    is_venue: false,
    is_artist: true,
  });

  debugger;
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userSignUpPromise = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      const uid = userSignUpPromise.user.uid;
      const newUserTest = Object.assign({}, user);
      newUserTest.firebase_uid = uid;
      await axios.post(`${API}/users`, newUserTest);
      const action = newUser(user);
      dispatch(action);
      history.push(`/users/${uid}`);
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleRadioClick = (e) => {
    debugger;
    const is_artist = e.target.id === "is_artist";
    setUser({ ...user, is_artist, is_venue: !is_artist });
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="name"
                value={user.username}
                id="username"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div>
              <Form.Group>
                <Form.Check
                  inline
                  label="I am an aritst"
                  id="is_artist"
                  onClick={handleRadioClick}
                  name="group1"
                  type="radio"
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  inline
                  label="I own a venue"
                  id="is_venue"
                  onClick={handleRadioClick}
                  name="group1"
                  type="radio"
                />
              </Form.Group>
            </div>
            <Button
              variant="secondary"
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login"> Log In </Link>
      </div>
    </>
  );
}
