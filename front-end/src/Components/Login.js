import React, { useState, useEffect } from "react";
import "../Styling/Login.css"
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
// import {  FloatingLabel } from "react-bootstrap";
import { useRef } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import useCurrentUser from "../util/useCurrentUser";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useCurrentUser();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    if (currentUser?.uid ) { //current user and current user uid
      history.push(`/users/${currentUser.uid}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);


  useEffect(() => {
    if (currentUser?.firebase_uid) {
      //current user and current user uid
      history.push(`/users/${currentUser.firebase_uid}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.firebase_uid) {
      //current user and current user uid
      history.push(`/users/${currentUser.firebase_uid}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      debugger;
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push(`/users/${currentUser.firebase_uid}`);
    } catch (e) {
      console.log(e);
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form className="card-login" onSubmit={handleSubmit}>
              <div>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
              {/* <FloatingLabel label="email"> */}
                  <Form.Control type="email" ref={emailRef} required />
                {/* </FloatingLabel> */}
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
              </div>
              <Button
                variant="secondary"
                disabled={loading}
                className="w-100"
                type="submit"
                id="login-btn"
              >
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
