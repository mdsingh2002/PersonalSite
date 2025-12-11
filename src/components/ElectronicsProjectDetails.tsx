import { Link } from "react-router-dom";

interface ElectronicsProjectDetailsProps {
  projectId: string;
}

interface ElectronicsProjectData {
  title: string;
  subtitle: string;
  description: string;
  hardware: string[];
  software: string[];
  features: string[];
  images: string[];
  videoUrl?: string;
  challenges?: string[];
  learnings?: string[];
}

// Electronics project data
const electronicsProjectData: Record<string, ElectronicsProjectData> = {
  "rfid-music-player": {
    title: "RFID Music Player",
    subtitle: "IoT Music System with Spotify Integration",
    description:
      "An innovative IoT music system that bridges physical interaction with digital streaming. Built with a Raspberry Pi and RFID RC522 reader, this project allows users to play their favorite Spotify playlists by simply scanning RFID cards. Each card is uniquely mapped to a specific playlist, creating an intuitive, tangible music browsing experience. The system integrates with Spotify's Web API for seamless playback control, implements OAuth 2.0 authentication for secure access, and uses GPIO programming for hardware interaction. This project demonstrates proficiency in embedded systems, API integration, and creating user-friendly IoT applications that merge hardware and software seamlessly.",
    hardware: [
      "Raspberry Pi 4",
      "RFID RC522 Reader",
      "RFID Cards/Tags",
      "GPIO Pins",
      "Speakers/Audio Output",
      "Power Supply",
      "LED Indicators",
    ],
    software: [
      "Python",
      "Spotify Web API",
      "Spotipy Library",
      "OAuth 2.0",
      "GPIO Programming (RPi.GPIO)",
      "MFRC522 Library",
      "JSON Configuration",
    ],
    features: [
      "Physical RFID cards mapped to Spotify playlists",
      "Real-time playlist playback via Spotify API",
      "Secure OAuth 2.0 authentication",
      "Card registration and playlist assignment system",
      "LED status indicators for scan feedback",
      "Playback controls (play, pause, skip)",
      "Multi-user support with individual Spotify accounts",
      "Configuration file for easy playlist management",
    ],
    images: [
      "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=RFID+System+Overview",
      "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Hardware+Setup",
      "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Card+Scanning",
    ],
    challenges: [
      "Implementing OAuth 2.0 flow on embedded device",
      "Handling RFID read errors and card collision detection",
      "Managing Spotify API rate limits and authentication tokens",
      "Ensuring reliable SPI communication with RFID module",
      "Creating robust error handling for network interruptions",
    ],
    learnings: [
      "REST API integration and OAuth 2.0 authentication",
      "Raspberry Pi GPIO programming and hardware interfacing",
      "RFID/NFC technology and SPI communication protocols",
      "Python async programming for responsive hardware interaction",
      "IoT system design and user experience considerations",
    ],
  },
};

export default function ElectronicsProjectDetails({
  projectId,
}: ElectronicsProjectDetailsProps) {
  const project = electronicsProjectData[projectId];

  if (!project) {
    return (
      <section className="min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The electronics project you're looking for doesn't exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/#electronics"
          className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 hover:gap-3 transition-all mb-8 group"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Electronics
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.subtitle}
          </p>
        </div>

        {/* Video/Image Gallery */}
        <div className="mb-12">
          {project.videoUrl ? (
            <div className="card-glass overflow-hidden mb-6">
              <div className="aspect-video">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : null}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="card-glass overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="card-glass p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About the Project
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {/* Components */}
        <div className="card-glass p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Components & Technologies
          </h2>

          <div className="space-y-6">
            {/* Hardware */}
            <div>
              <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                Hardware
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.hardware.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Software */}
            <div>
              <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                Software
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.software.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="card-glass p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <svg
                  className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        {project.challenges && (
          <div className="card-glass p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Challenges Overcome
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="card-glass p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What I Learned
            </h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
