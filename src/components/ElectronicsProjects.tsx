import { useState } from "react";

interface ElectronicsProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
}

// Featured Electronics Project
const electronicsProjects: ElectronicsProject[] = [
  {
    id: 1,
    title: "RFID Music Player",
    description:
      "An IoT music system using Raspberry Pi and RFID technology that allows users to play Spotify playlists by scanning physical RFID cards. Each card is mapped to a specific playlist, creating a tangible, intuitive music experience with seamless API integration.",
    image: "/Spotify-Logo.png",
    technologies: ["Raspberry Pi", "Python", "RFID RC522", "Spotify API", "GPIO"],
    category: "IoT/Audio",
    link: "/electronics/rfid-music-player",
  },
];

export default function ElectronicsProjects() {
  return (
    <section id="electronics" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Featured Electronics Project
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Hardware design & embedded systems
          </p>
        </div>

        {/* Featured Project - Centered */}
        <div className="max-w-3xl mx-auto">
          {electronicsProjects.map((project) => (
            <div
              key={project.id}
              className="card-glass card-glass-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-500 to-brand-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 glass-heavy rounded-full text-xs font-medium text-gray-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies - Glass badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 glass-heavy text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-brand-600 dark:text-brand-400 font-medium hover:gap-2 transition-all group/link"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:ml-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
