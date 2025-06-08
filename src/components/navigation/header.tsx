import { useState } from "react";
import { MobileMenu, Navbar } from "./header/index";
import { useStickyScroll } from "../../utils";

interface HeaderProps {
  stickyOnscroll?: boolean;
}

const Header: React.FC<HeaderProps> = ({ stickyOnscroll = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSticky = useStickyScroll(stickyOnscroll);

  return (
    <header className={`${isSticky ? "is-sticky" : ""}`}>
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <MobileMenu isMenuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
