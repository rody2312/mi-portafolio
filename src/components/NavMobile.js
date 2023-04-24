import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItem from "./NavItem";

const NavMobile = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full z-20 ${
      isOpen ? "block" : "hidden"
    }`}
    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
  >
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-end mt-6 mr-6">
        <button className="text-white focus:outline-none" onClick={onClose}>
          <FaTimes size={32} />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center space-y-6">
        <NavItem to="hero" onClick={onClose}>
          Inicio
        </NavItem>
        <NavItem to="about" onClick={onClose}>
          Acerca de mí
        </NavItem>
        <NavItem to="skills" onClick={onClose}>
          Habilidades
        </NavItem>
        <NavItem to="projects" onClick={onClose}>
          Proyectos
        </NavItem>
      </div>
      <div className="mb-6"></div>
    </div>
  </div>
);

export default NavMobile;
