import "../Styling/Footer.css";
import Logo from "../Logo/OnlyArt-logos_transparent.png";
import { Instagram, Facebook, Twitter, Twitch } from "react-feather";

function FooterDetails() {
  return (
    <footer className="footer">
      <div className="l-footer">
        <h1>
        <img className="footer-logo" src={Logo} alt="logo" />
          {/* <img src="https://i.postimg.cc/y62wcLBq/logo.png" alt="" /> */}
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
          tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
          recusandae.
        </p> */}
      </div>
      <ul className="r-footer">
        <li>
          <h2>Social</h2>
          <ul className="box">
            <li>
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=en">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/">
                <Twitch />
              </a>
            </li>
          </ul>
        </li>
        <li className="features">
          <h2>Information</h2>
          <ul className="box h-box">
            <li>
              <a href="https://sneeit.com/spotdummy-blogger-demo-data-generator-for-template-developers/">Blog</a>
            </li>
            <li>
              <a href="https://www.artnews.com/">Press</a>
            </li>
            <li>
              <a href="https://www.indeed.com/">Jobs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul className="box">
            <li>
              <a href="https://www.termsfeed.com/live/a13f01fd-0a39-4fdc-a1fd-fcdd00a5baf6">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.termsfeed.com/live/eef4950c-0956-49b1-ab1d-17dd4f83cda1">Terms of Use</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <span className="footer-span">
          {" "}
          &copy; {new Date().getFullYear()} All rights reserved by ©OnlyArt.{" "}
        </span>
      </div>
    </footer>
  );
}
export default FooterDetails;
