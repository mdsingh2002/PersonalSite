import { useState } from 'react';

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
    title: 'Arduino Weather Station',
    description: 'A complete weather monitoring system using Arduino, DHT22 sensor, and LCD display. Tracks temperature, humidity, and displays real-time data.',
    image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Weather+Station',
    technologies: ['Arduino', 'C++', 'DHT22', 'LCD Display'],
    category: 'IoT',
    link: '#',
  },
  {
    id: 2,
    title: 'Home Automation System',
    description: 'Smart home control system with ESP32, relay modules, and mobile app integration. Control lights and appliances remotely.',
    image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Home+Automation',
    technologies: ['ESP32', 'MQTT', 'Relay', 'WiFi'],
    category: 'IoT',
    link: '#',
  },
  {
    id: 3,
    title: 'Line Following Robot',
    description: 'Autonomous robot using IR sensors and motor drivers. Follows black lines on white surfaces with PID control.',
    image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Line+Robot',
    technologies: ['Arduino', 'IR Sensors', 'L298N', 'PID'],
    category: 'Robotics',
    link: '#',
  },
  {
    id: 4,
    title: 'Digital Oscilloscope',
    description: 'DIY oscilloscope using Arduino and TFT display. Visualizes analog signals in real-time with adjustable time and voltage scales.',
    image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Oscilloscope',
    technologies: ['Arduino', 'TFT Display', 'ADC', 'Signal Processing'],
    category: 'Instrumentation',
    link: '#',
  },
  {
    id: 5,
    title: 'Solar Tracker',
    description: 'Automatic solar panel positioning system using LDR sensors and servo motors. Maximizes solar energy collection.',
    image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Solar+Tracker',
    technologies: ['Arduino', 'LDR', 'Servo Motors', 'Solar Panel'],
    category: 'Renewable Energy',
    link: '#',
  },
  {
    id: 6,
    title: 'Bluetooth Speaker',
    description: 'Custom-built portable Bluetooth speaker with amplifier circuit, rechargeable battery, and wooden enclosure.',
    image: 'https://via.placeholder.com/400x250/EC4899/FFFFFF?text=BT+Speaker',
    technologies: ['Bluetooth Module', 'Amplifier IC', 'Li-ion Battery', 'Audio'],
    category: 'Audio',
    link: '#',
  },
];

const categories = ['All', ...new Set(electronicsProjects.map(p => p.category))];

export default function ElectronicsProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? electronicsProjects
    : electronicsProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="electronics" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Electronics Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Hardware projects, circuits, and embedded systems
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all group"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Notice */}
        <div className="mt-12 max-w-4xl mx-auto p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Note:</strong> Customize your electronics projects in{' '}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
              src/components/ElectronicsProjects.tsx
            </code>
            {' '}(add your own images, descriptions, and links)
          </p>
        </div>
      </div>
    </section>
  );
}
