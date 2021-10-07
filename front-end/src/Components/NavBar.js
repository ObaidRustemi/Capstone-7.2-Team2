import "../Styling/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "../index.css";
import { useSelector } from "react-redux";
import { Navbar, Nav, } from "react-bootstrap";
import Logo from "../Logo/OnlyArt-logos_transparent.png"

const NavBar = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Navbar 
        id="nav-main-div"
        expand="xxl"
        bg="dark"
        variant="light">
        <Navbar.Brand href="/users"><img className="logo" src={Logo} alt="logo"/></Navbar.Brand>
        {currentUser ? (
          <div className="navbar-item" > 
            <NavLink className="navbar-item" to={`/users/${currentUser.uid}`}>  Hello {currentUser.email}!</NavLink>
              <NavLink className="navbar-item" to="/dashboard"> Account Info </NavLink>
              <NavLink className="navbar-item" to="/uploadArtwork"> Upload </NavLink>
              <NavLink className="navbar-item" to="/users"> Index Page </NavLink>
          </div>
        ) : (
          <div >
              <NavLink className="navbar-item" to="/signup"> Register </NavLink>
              <NavLink  className="navbar-item" to="/login"> Log In </NavLink>
              <NavLink className="navbar-item" to="/users"> Index Page </NavLink>
          </div>
        )}
    </Navbar>
  );
};

export default NavBar;