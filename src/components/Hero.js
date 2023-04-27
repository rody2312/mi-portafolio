import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

import { FaAngleDown } from "react-icons/fa";

const Hero = () => {
  const [animationDone, setAnimationDone] = useState(false);

  const cvLink = "https://drive.google.com/path/to/your/resume.pdf";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white"
    >
      <div className="container mx-auto px-4">
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-4 md:space-y-10">
          <div className="flex flex-col items-start space-y-2 md:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Hola, soy</h2>
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold pb-5">
              <Typewriter
                words={["Rody Chuquimia"]}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Desarrollador informático
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl">Apasionado por la tecnología</p>
            <div className="flex space-x-4">
              <Link
                to="about"
                className={`px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white font-semibold text-lg sm:text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-colors duration-200 hover:bg-blue-600 cursor-pointer ${
                  animationDone ? "animate-pulse" : ""
                }`}
                smooth={true}
                duration={500}
              >
                Acerca de mí
              </Link>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white font-semibold text-lg sm:text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-colors duration-200 hover:bg-blue-600 cursor-pointer ${
                  animationDone ? "animate-pulse" : ""
                }`}
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Flecha hacia abajo */}
          <div className="absolute bottom-10">
            <Link
              to="about"
              className="text-4xl transition-all duration-500 ease-in-out transform-gpu hover:text-blue-300 cursor-pointer"
              smooth={true}
              duration={500}
            >
              <FaAngleDown className="animation-bounce" size={50} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
