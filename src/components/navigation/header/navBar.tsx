import { NavLink, Link } from "react-router-dom";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <nav>
      <div className="container-fluid d-flex justify-content-between nav-container">
        <Link to="/">Logo here</Link>
        <div className="nav-desktop-and-menu-toggle d-flex align-items-center">
          <div className="nav-desktop-links d-none d-lg-block">
            <NavLink className="nav-desktop-link" to="/">
              Forside
            </NavLink>
            <NavLink className="nav-desktop-link" to="/">
              Coaching
            </NavLink>
            <NavLink className="nav-desktop-link" to="/">
              Om meg
            </NavLink>
            <NavLink className="nav-desktop-link" to="/">
              Kontakt
            </NavLink>
          </div>
          <div onClick={onMenuToggle} className="d-block d-lg-none menu-toggle" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
