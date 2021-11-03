import "../Styling/LandingPage.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Link to="/users">
      <div className="wrapper">
        <div className="text-wrapper">
          <p className="landing-p">O N L Y</p>
        </div>
        <div className="animated-words">
          <span className="am1 nl">P A I N T</span>
          <span className="am1 nl">C A N V A S</span>
          <span className="am1 nl">V I S I O N S</span>
          <span className="am1 nl">P A S S I O N </span>
          <span className="am1 nl">I N S P R A T I O N </span>
          <span className="am1 last">A R T</span>
        </div>
      </div>
    </Link>
  );
};
export default Landing;
