import "../Styling/NavBar.css";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Navbar } from "react-bootstrap";
import Logo from "../Logo/OnlyArt-logos_white.png";
import useCurrentUser from "../util/useCurrentUser";

const NavBar = () => {
  const currentUser = useCurrentUser();

  return (
    <Navbar id="nav-main-div" expand="xxl" bg="dark" variant="light">
      <Navbar.Brand href="/users">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      {currentUser ? (
        <div className="navbar-item">
          <NavLink
            className="navbar-item"
            to={`/users/${currentUser.firebase_uid}`}
          >
            {/* Hello {currentUser.username || currentUser.email}! */}
            Hello {currentUser.username}!
          </NavLink>
          <NavLink className="navbar-item" to="/dashboard">
            {" "}
            Account Info{" "}
          </NavLink>
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
