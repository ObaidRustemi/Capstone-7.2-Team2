import "../Styling/NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "../index.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const currentUser = useSelector((state) => state.currentUser);


  return (
    <div id="nav-main-div">
      <div class="left" id="title">
        <Navbar.Brand href="/">onlyART</Navbar.Brand>
        {/* <Link to="/">onlyART</Link> */}
      </div>
      <div class="right" id="links">
        {currentUser ? (
          <div>
            <p> Hello {currentUser.email}!</p>
           <p>
            <NavLink to="/dashboard"> Account Info </NavLink>
            </p>
            <p>
            <NavLink to="/uploadArtwork"> Upload </NavLink>
            </p>
          </div>
        ) : (
          <div className="nav">
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
