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

// You can customize this data with your actual electronics projects
const electronicsProjects: ElectronicsProject[] = [
  {
    id: 1,
    title: "Arduino Weather Station",
    description:
      "A complete weather monitoring system using Arduino, DHT22 sensor, and LCD display. Tracks temperature, humidity, and displays real-time data.",
    image:
      "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Weather+Station",
    technologies: ["Arduino", "C++", "DHT22", "LCD Display"],
    category: "IoT",
    link: "#",
  },
  {
    id: 2,
    title: "Home Automation System",
    description:
      "Smart home control system with ESP32, relay modules, and mobile app integration. Control lights and appliances remotely.",
    image:
      "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Home+Automation",
    technologies: ["ESP32", "MQTT", "Relay", "WiFi"],
    category: "IoT",
    link: "#",
  },
  {
    id: 3,
    title: "Line Following Robot",
    description:
      "Autonomous robot using IR sensors and motor drivers. Follows black lines on white surfaces with PID control.",
    image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Line+Robot",
    technologies: ["Arduino", "IR Sensors", "L298N", "PID"],
    category: "Robotics",
    link: "#",
  },
  {
    id: 4,
    title: "Digital Oscilloscope",
    description:
      "DIY oscilloscope using Arduino and TFT display. Visualizes analog signals in real-time with adjustable time and voltage scales.",
    image:
      "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Oscilloscope",
    technologies: ["Arduino", "TFT Display", "ADC", "Signal Processing"],
    category: "Instrumentation",
    link: "#",
  },
  {
    id: 5,
    title: "Solar Tracker",
    description:
      "Automatic solar panel positioning system using LDR sensors and servo motors. Maximizes solar energy collection.",
    image:
      "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Solar+Tracker",
    technologies: ["Arduino", "LDR", "Servo Motors", "Solar Panel"],
    category: "Renewable Energy",
    link: "#",
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    description:
      "Custom-built portable Bluetooth speaker with amplifier circuit, rechargeable battery, and wooden enclosure.",
    image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=BT+Speaker",
    technologies: [
      "Bluetooth Module",
      "Amplifier IC",
      "Li-ion Battery",
      "Audio",
    ],
    category: "Audio",
    link: "#",
  },
];

const categories = [
  "All",
  ...new Set(electronicsProjects.map((p) => p.category)),
];

export default function ElectronicsProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? electronicsProjects
      : electronicsProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="electronics" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Electronics Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Hardware projects, circuits & embedded systems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-apple ${
                selectedCategory === category
                  ? "bg-brand-500 text-white shadow-soft-md"
                  : "glass-heavy text-gray-700 dark:text-gray-300 hover:shadow-glass-hover"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
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

        {/* Edit Notice - Glass card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-glass p-6 border-2 border-brand-200 dark:border-brand-800/30">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Customize your electronics projects in{" "}
              <code className="glass-heavy px-2 py-1 rounded text-xs">
                src/components/ElectronicsProjects.tsx
              </code>{" "}
              (add your own images, descriptions, and links)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
