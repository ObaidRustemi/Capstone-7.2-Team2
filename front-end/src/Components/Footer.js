import "../Styling/Footer.css";
import Logo from "../Logo/OnlyArt-logos_transparent.png";
import { Instagram, Facebook, Twitter, Twitch } from "react-feather";

function FooterDetails() {
  return (
    <footer className="footer">
      <div class="l-footer">
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
      <ul class="r-footer">
        <li>
          <h2>Social</h2>
          <ul class="box">
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitch />
              </a>
            </li>
          </ul>
        </li>
        <li class="features">
          <h2>Information</h2>
          <ul class="box h-box">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul class="box">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="b-footer">
        <span className="footer-span">
          {" "}
          &copy; {new Date().getFullYear()} All rights reserved by ©OnlyArt.{" "}
        </span>
      </div>
    </footer>
  );
}
export default FooterDetails;
