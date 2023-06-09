import {
  FaLinkedin,
  FaGithub,
  FaInfoCircle,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { IoShareSocial } from "react-icons/io5"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-8 lg:px-20 md:px-10 px-5 text-white flex items-center justify-center"
    >
      <div className="card bg-section mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">
          <FaInfoCircle className="section-icon inline-block text-4xl mr-2" />
          <span className="section-title">Acerca de mí</span>
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center justify-between">
            <div className="flex-1 text-lg leading-relaxed">
              <p className="mt-8">
                Hola, soy <strong>Rody Chuquimia</strong>, recién titulado de
                Ingeniería en Informática, autodidacta y de rápido aprendizaje,
                enfocado principalmente en el desarrollo Backend con Django y
                MySQL. Actualmente amplío mis habilidades en el desarrollo
                Frontend mediante React, participando en proyectos personales y
                cursos en plataformas como Platzi y Udemy. Mi adaptabilidad y
                compromiso con el aprendizaje continuo me permiten estar a la
                vanguardia de las tendencias tecnológicas y ofrecer soluciones
                innovadoras y de alto impacto en cualquier negocio.
              </p>
              <div className="mt-8">
                <h3 className="flex text-lg font-medium mb-2">
                  <FaGraduationCap className="inline-block text-4xl mr-2" size={30} />
                  Estudios
                </h3>
                <ul className="list-none list-inside">
                  <li className="mb-4">
                    Ingeniería en Informática - Universidad ABC (2019 - 2022)
                  </li>
                  <li className="mb-4">
                    <a href="#" className="flex items-center">
                      Certificación en Desarrollo Web Full Stack - Platzi (2021) 
                      <FaExternalLinkAlt className="ml-3" size={15} />
                    </a>
                  </li>
                  {/* Agrega más estudios aquí si lo deseas */}
                </ul>
              </div>
            </div>
            <div className="flex-1 text-center">
              <img
                className="mx-auto w-48 h-48 rounded-full shadow-md"
                src="/images/profile.jpg"
                alt="Rody Chuquimia"
              />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="flex text-lg font-medium mb-2">
              <IoShareSocial className="inline-block text-4xl mr-2" size={30} />
              Redes Sociales
            </h3>
            <ul className="list-none list-inside flex flex-col">
              <li className="mb-4">
                <a
                  href="https://www.linkedin.com/in/tu-usuario/"
                  className="text-blue-300 hover:text-blue-400"
                  target="_blank"
                >
                  <FaLinkedin className="inline-block text-4xl mr-2" /> LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/tu-usuario"
                  className="text-blue-300 hover:text-blue-400"
                  target="_blank"
                >
                  <FaGithub className="inline-block text-4xl mr-2" /> GitHub
                </a>
              </li>
              {/* Agrega más enlaces aquí si lo deseas */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
