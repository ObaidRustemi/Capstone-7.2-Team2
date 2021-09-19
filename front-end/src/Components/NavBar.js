import "../Styling/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();

  return (
    <div id="nav-main-div">
      <div class="left" id="title">
        <Link to="/">OURArt</Link>
      </div>
      <div class="right" id="links">
        {currentUser ? (
          <div>
            <p> Hello {currentUser.email}!</p>
            <NavLink to="/dashboard"> Account Info </NavLink>
          </div>
        ) : (
          <div>
            <p>
              <NavLink to="/signup"> Register </NavLink>
            </p>
            <p>
              <NavLink to="/login"> Log In </NavLink>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
