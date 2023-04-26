import React, { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [showData, setShowData] = useState({
    linkedin: false,
    phone: false,
    email: false,
    location: false,
  });

  const handleShowData = (type) => {
    setShowData({ ...showData, [type]: !showData[type] });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-section text-white"
    >
      <h2 className="text-center text-2xl mb-6">
        <span className="section-title">Contacto</span>
      </h2>
      <div className="max-w-md mx-auto">
        <div className="bg-blue-975 rounded-md shadow-md p-4">
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center gap-4 cursor-pointer hover:bg-blue-900 p-2 rounded"
              onClick={() => handleShowData("phone")}
            >
              <FaMobileAlt className="text-4xl" />
              <div>
                <h4 className="text-lg font-semibold">Teléfono</h4>
                {showData.phone && <p>+123 456 7890</p>}
              </div>
            </div>
            <div
              className="flex items-center gap-4 cursor-pointer hover:bg-blue-900 p-2 rounded"
              onClick={() => handleShowData("email")}
            >
              <FaEnvelope className="text-4xl" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                {showData.email && (
                  <p>
                    <a href="mailto:your-email@example.com" target="_blank">
                      your-email@example.com
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div
              className="flex items-center gap-4 cursor-pointer hover:bg-blue-900 p-2 rounded"
              onClick={() => handleShowData("location")}
            >
              <FaMapMarkerAlt className="text-4xl" />
              <div>
                <h4 className="text-lg font-semibold">Localidad</h4>
                {showData.location && <p>Ciudad, País</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-10">
        <div className="bg-blue-975 rounded-md shadow-md p-4">
          <h3 className="text-center text-lg font-medium mb-2">
            Redes Sociales
          </h3>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-col items-center m-2">
                <a
                  href="https://www.linkedin.com/in/tu-usuario/"
                  className="text-blue-300 hover:text-blue-400"
                  target="_blank"
                >
                  <FaLinkedin className="inline-block text-4xl mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center m-2">
              <a
                href="https://github.com/tu-usuario"
                className="text-blue-300 hover:text-blue-400"
                target="_blank"
              >
                <FaGithub className="inline-block text-4xl mr-2" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
