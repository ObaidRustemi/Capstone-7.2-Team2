import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function SignUp() {
  // const usernameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    username: null,
    firebase_uid: null,
    phone_number: null,
    is_venue: null,
    is_artist: null
  });
  // const [uid, setUid] = useState(null)

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

      // setNewUser( )
      // debugger
      const uid = userSignUpPromise.user.uid;

      // setNewUser({...newUser, firebase_uid: uid})
      const newUserTest = Object.assign({}, newUser);
      newUserTest.is_venue = true
      newUserTest.is_artist = false
      newUserTest.firebase_uid = uid;
      const res = await axios.post(`${API}/users`, newUserTest);
      history.push("/dashboard");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  const handleNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
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
                value={newUser.username}
                id="username"
                onChange={handleNewUser}
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
