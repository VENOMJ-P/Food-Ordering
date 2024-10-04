import { Link } from "react-router-dom";
import logo from "../../assets/img/image.png";
import Auth_UI from "./auth_ui";

const NavigationBar = () => {
  return (
    <nav className="navigationBar" key="navigationBar">
      <img className="siteLogo" key="siteLogo" src={logo} alt="Site Logo" />
      <ul className="navigationLinks" key="navigationLinks">
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        <li key="about">
          <Link to="/about">About Us</Link>
        </li>
        <li key="contact">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li key="cart">Cart</li>
      </ul>
      <Auth_UI />
    </nav>
  );
};

export default NavigationBar;
