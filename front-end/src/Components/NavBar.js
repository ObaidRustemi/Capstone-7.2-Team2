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
    <Navbar id="nav-main-div"
    expand="xxl"
        bg="dark"
        variant="light">
      {/* <div> */}
        <Navbar.Brand href="/"><img className="logo" src={Logo} alt="logo"/></Navbar.Brand>
      {/* </div> */}
      {/* <div class="right" id="links"> */}
        {currentUser ? (
          <Nav className="mr-auto" > 
            <p className="hello">  Hello {currentUser.email}!</p>
            {/* <p> */}
              <NavLink className="navbar-item" to="/dashboard"> Account Info </NavLink>
            {/* </p> */}
            {/* <p> */}
              <NavLink className="navbar-item" to="/uploadArtwork"> Upload </NavLink>
            {/* </p> */}
            {/* <p> */}
              <NavLink className="navbar-item" to="/users"> Index Page </NavLink>
            {/* </p> */}
          </Nav>
        ) : (
          <Nav className="navbar-item" >
            {/* <p> */}
              <NavLink className="navbar-item" to="/signup"> Register </NavLink>
            {/* </p> */}
            {/* <p> */}
              <NavLink  className="navbar-item" to="/login"> Log In </NavLink>
            {/* </p> */}
            {/* <p> */}
              <NavLink className="navbar-item" to="/users"> Index Page </NavLink>
            {/* </p> */}
          </Nav>
        )}
      {/* </div> */}
    </Navbar>
  );
};

export default NavBar;
