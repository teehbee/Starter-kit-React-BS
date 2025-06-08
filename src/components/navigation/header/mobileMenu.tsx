import { NavLink, Link } from "react-router-dom";
import { useRef } from "react";
import { useMenuBehavior } from "../../../utils";

interface MobileMenuProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, isMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useMenuBehavior({ isMenuOpen, menuRef, onClose });

  return (
    <div className={`menu-backdrop ${isMenuOpen ? "show" : ""}`}>
      <div ref={menuRef} className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header d-flex justify-content-between">
          <Link to="/">Logo</Link>
          <button onClick={onClose} className="mobile-menu-close" aria-label="Close menu">
            <div className="bar bar1" />
            <div className="bar bar2" />
          </button>
        </div>
        <div className="mobile-menu-wrapper d-flex flex-column justify-content-center">
          <nav className="d-flex flex-column text-center">
            <NavLink to="/" onClick={onClose}>
              Forside
            </NavLink>
            <NavLink to="/coaching" onClick={onClose}>
              Coaching
            </NavLink>
            <NavLink to="/om-meg" onClick={onClose}>
              Om meg
            </NavLink>
            <NavLink to="/kontakt" onClick={onClose}>
              Kontakt
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
