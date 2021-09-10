import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* click on navbar link will scroll to top */}
      <span onClick={() => window.scroll(0, 0)} className="navbar">
        Teavies
      </span>
    </div>
  );
};

export default Navbar;
