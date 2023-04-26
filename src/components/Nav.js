import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NavItem from './NavItem';
import { FaBars } from 'react-icons/fa';

const Nav = ({ onMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 ${
        scrolled ? 'bg-black h-16 bg-opacity-70 blur-background' : 'h-20'
      } transition-all duration-300 flex items-center`}
    >
      <div className="container mx-auto px-4 py-2">
        <ul className="flex md:justify-center space-x-4">
          <li className='hidden md:block'>
            <NavItem to="hero">Inicio</NavItem>
          </li>
          <li className='hidden md:block'>
            <NavItem to="about">Acerca de mí</NavItem>
          </li>
          <li className='hidden md:block'>
            <NavItem to="skills">Habilidades</NavItem>
          </li>
          <li className='hidden md:block'>
            <NavItem to="projects">Proyectos</NavItem>
          </li>
          <li className='hidden md:block'>
            <NavItem to="contact">Contacto</NavItem>
          </li>
          {/* NavMobile */}
          <li className="block md:hidden ml-4">
            <button
              className="text-white focus:outline-none"
              onClick={onMenuOpen}
            >
              <FaBars size={32} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
