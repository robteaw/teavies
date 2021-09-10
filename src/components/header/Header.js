import "./Header.css";
import logo from "../../images/teavies.png";

const Header = () => {
  return (
    <div>
      {/* click on navbar link will scroll to top */}
      <span onClick={() => window.scroll(0, 0)} className="header">
        <img src={logo} alt={logo} />
      </span>
    </div>
  );
};

export default Header;
