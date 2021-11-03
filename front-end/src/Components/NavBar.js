import "../Styling/NavBar.css";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import Logo from "../Logo/OnlyArt-logos_white.png";
import useCurrentUser from "../util/useCurrentUser";
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const { logout } = useAuth();
  const [error, setError] = useState("");
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
    <Navbar id="nav-main-div" expand="xxl" bg="dark" variant="light">
      <Navbar.Brand href="/">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      {currentUser ? (
        <div className="navbar-item">
          <NavLink
            className="navbar-item"
            to={`/users/${currentUser.firebase_uid}`}
          >
            {/* Hello {currentUser.username || currentUser.email}! */}
            Hello {currentUser.username} !
          </NavLink>
          <DropdownButton
            variant="dark"
            id="dropdown-basic-button"
            title="Account Info"
          >
            <Dropdown.Item href={`/users/${currentUser.firebase_uid}`}>
              My Profile
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleLogout}>
              Log out
            </Dropdown.Item>
          </DropdownButton>
          {/* <NavLink className="navbar-item" to="/dashboard">
            {" "}
            Account Info{" "}
          </NavLink> */}
        </div>
      ) : (
        <div className="signup">
          <NavLink className="navbar-item" id="register" to="/signup">
            {" "}
            Register{" "}
          </NavLink>
          <NavLink className="navbar-item" to="/login">
            {" "}
            Log In{" "}
          </NavLink>
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
