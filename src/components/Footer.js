// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Rody Chuquimia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;