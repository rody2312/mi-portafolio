import { Link } from "react-scroll";


const NavItem = ({ to, children }) => (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-lg text-white hover:text-blue-500 transition-colors duration-300 mx-4 cursor-pointer"
    >
      {children}
    </Link>
  );
  
export default NavItem;