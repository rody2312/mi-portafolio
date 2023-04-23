import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ to, children }) => (
  <Link
    activeClass="text-blue-500"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
  >
    {children}
  </Link>
);

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md z-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center space-x-4">
          <li>
            <NavItem to="hero">Inicio</NavItem>
          </li>
          <li>
            <NavItem to="about">Acerca de mí</NavItem>
          </li>
          <li>
            <NavItem to="skills">Habilidades</NavItem>
          </li>
          <li>
            <NavItem to="projects">Proyectos</NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
