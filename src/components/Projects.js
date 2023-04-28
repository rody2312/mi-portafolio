import React from "react";
import { FaExternalLinkAlt, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-in-out ${
        inView ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      } lg:w-80 2xl:w-96`} 
    >
      <div className="bg-blue-975 rounded-lg shadow-md p-2 hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <div className="w-full h-52 flex items-center justify-center">
            <img
              className="w-96 h-48 object-cover mb-4 rounded-t-sm"
              src="https://via.placeholder.com/300x200"
              alt={project.title}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-gray-900 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="h-full flex items-center justify-center">
              <p className="text-sm text-white px-4">{project.description}</p>
            </div>
          </div>
        </div>
        <h3 className="text-xl mb-2 text-white">{project.title}</h3>
        <div className="mb-4 space-x-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 my-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex">
          <a
            href="https://github.com/tu-usuario/proyecto"
            target="_blank"
            rel="noreferrer"
            className="text-center text-white text-xs sm:text-sm w-1/2 px-0 py-2 rounded-b-lg rounded-br-none rounded-tr-none transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg flex items-center justify-center border-t border-r border-blue-800"
          >
            <FaGithub className="mr-1" />
            Ver código fuente
          </a>
          <a
            href="https://ejemplo.com"
            target="_blank"
            rel="noreferrer"
            className="text-center text-white text-xs sm:text-sm w-1/2 px-0 py-2 rounded-b-lg rounded-bl-none rounded-tl-none transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg flex items-center justify-center border-t border-blue-800"
          >
            <FaExternalLinkAlt className="mr-1" />
            Ver demo
          </a>
        </div>
      </div>
    </div>
  );
};





const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Vue", "Firebase"],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      technologies: ["Vue", "Firebase"],
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      technologies: ["Vue", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-8 lg:px-20 md:px-10 px-5 text-white flex items-center justify-center">
      <div className="card bg-section mx-auto px-4 lg:px-8 py-4 rounded-md shadow-lg w-full">
        <h2 className="text-center text-2xl mb-6">
          <FaProjectDiagram className="section-icon inline-block text-4xl mr-2" />
          <span className="section-title">Proyectos</span>
        </h2>
        <p className="text-center text-lg leading-relaxed mb-4">
          Estos son algunos de mis proyectos recientes. Siéntase libre de
          revisar el código fuente y ver cómo funcionan.
        </p>
        <div className="container mx-auto text-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
