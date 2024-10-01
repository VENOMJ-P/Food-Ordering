import logo from "../../static/image.png";

const NavigationBar = () => {
  return (
    <nav className="navigationBar" key="navigationBar">
      <img className="siteLogo" key="siteLogo" src={logo} alt="Site Logo" />
      <ul className="navigationLinks" key="navigationLinks">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
