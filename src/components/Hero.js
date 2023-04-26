import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Link } from "react-scroll";

import SpinningSmileyFace from './SpinningSmileyFace';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4">
        <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center space-y-10 md:space-x-10 md:space-y-0">
          <div className="flex flex-col items-start space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold">Bienvenido a mi portafolio</h1>
            <p className="text-xl md:text-2xl">
              Soy Rody Chuquimia, un desarrollador informático apasionado por la
              tecnología
            </p>
            <Link
              to="about"
              className="px-8 py-3 bg-blue-500 text-white font-semibold text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-colors duration-200 hover:bg-blue-600 cursor-pointer"
              smooth={true}
              duration={500}
            >
              Acerca de mí
            </Link>
          </div>
          <div className="hidden md:block w-60 lg:w-96">
            <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <SpinningSmileyFace />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
