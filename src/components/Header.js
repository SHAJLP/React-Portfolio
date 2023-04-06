import NavLinks from "./NavLinks";
import logo from "../images/logo192.png";

const Header = () => {
  return (
    <header className="header">
      <img className="Me" src={logo} alt="Sophia Altaf" />
      <NavLinks />
    </header>
  );
};

export default Header;
