import { Link } from "react-router-dom";

interface ProjectDetailsProps {
  projectId: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  videoUrl?: string;
  githubUrl: string;
  demoUrl?: string;
  challenges?: string[];
  learnings?: string[];
}

// Project data
const projectData: Record<string, ProjectData> = {
  scannplan: {
    title: "ScanNPlan",
    subtitle: "Event Planning & QR Code Management System",
    description:
      "A comprehensive event management application built for CMPUT 301. ScanNPlan allows event organizers to create, manage, and track events while participants can easily check-in using QR codes. The system includes real-time notifications, geolocation tracking, and an admin dashboard for monitoring all activities.",
    technologies: [
      "Java",
      "Android SDK",
      "Firebase",
      "Google Maps API",
      "Material Design",
      "JUnit",
      "Espresso",
    ],
    features: [
      "QR Code generation and scanning for event check-ins",
      "Real-time push notifications for event updates",
      "Geolocation tracking for event attendance verification",
      "Admin dashboard with analytics and user management",
      "Event creation and management interface",
      "User profile customization and preferences",
      "Photo upload and gallery for events",
      "Waitlist and attendee management system",
    ],
    images: [
      "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=ScanNPlan+Dashboard",
      "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=QR+Scanner",
      "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Event+Details",
    ],
    videoUrl: "https://www.youtube.com/embed/your-video-id", // Optional: Add YouTube video
    githubUrl: "https://github.com/CMPUT301W24T21/ScanNPlan",
    challenges: [
      "Implementing real-time sync across multiple devices using Firebase",
      "Optimizing QR code scanning performance in low-light conditions",
      "Handling edge cases in geolocation tracking and permissions",
      "Designing an intuitive UX for both organizers and participants",
    ],
    learnings: [
      "Advanced Android development patterns and best practices",
      "Firebase real-time database architecture and security rules",
      "Test-driven development with JUnit and Espresso",
      "Collaborative development using Git and Agile methodologies",
    ],
  },
};

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <section className="min-h-screen py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The project you're looking for doesn't exist.
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
          to="/#projects"
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
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass-heavy rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 hover:shadow-glass-hover"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-lg font-medium transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="card-glass overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
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

        {/* Technologies */}
        <div className="card-glass p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
              >
                {tech}
              </span>
            ))}
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
