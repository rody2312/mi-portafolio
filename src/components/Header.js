import { useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav onMenuOpen={() => setMenuOpen(true)} />
      <div className="lg:hidden">
        <NavMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default Header;
