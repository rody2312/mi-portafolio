import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItem from "./NavItem";

const NavMobile = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full z-20 ${
      isOpen ? "block" : "hidden"
    }`}
    style={{ backgroundColor: "rgba(0, 0, 0, 0.90)" }}
  >
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-end mt-6 mr-6">
        <button className="text-white focus:outline-none" onClick={onClose}>
          <FaTimes size={32} />
        </button>
      </div>
      <div
        className="flex-grow flex flex-col justify-center items-center space-y-6"
        onClick={onClose}
      >
        <NavItem to="hero" onClick={onClose}>
          <div className="text-3xl" onClick={onClose}>
            Inicio
          </div>
        </NavItem>
        <NavItem to="about">
          <div className="text-3xl" onClick={onClose}>
            Acerca de mí
          </div>
        </NavItem>
        <NavItem to="skills" onClick={onClose}>
          <div className="text-3xl" onClick={onClose}>
            Habilidades
          </div>
        </NavItem>
        <NavItem to="projects" onClick={onClose}>
          <div className="text-3xl" onClick={onClose}>
            Proyectos
          </div>
        </NavItem>
        <NavItem to="contact" onClick={onClose}>
          <div className="text-3xl" onClick={onClose}>
            Contacto
          </div>
        </NavItem>
      </div>
      <div className="mb-6"></div>
    </div>
  </div>
);

export default NavMobile;
