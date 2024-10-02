import logo from "../../static/image.png";

const NavigationBar = () => {
  return (
    <nav className="navigationBar" key="navigationBar">
      <img className="siteLogo" key="siteLogo" src={logo} alt="Site Logo" />
      <ul className="navigationLinks" key="navigationLinks">
        <li key="home">Home</li>
        <li key="about">About</li>
        <li key="contact">Contact</li>
        <li key="cart">Cart</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
