import { Link } from "react-router-dom";

interface ProjectDetailsProps {
  projectId: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  technologies?: string[];
  frontend?: string[];
  backend?: string[];
  database?: string[];
  externalApis?: string[];
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
      "AndroidX",
      "Firebase",
      "Firebase Authentication",
      "ZXing (Barcode/QR scanning)",
      "RecyclerView",
      "ConstraintLayout",
      "Material Design Components",
      "JUnit",
      "Android ViewBinding",
      "Android CameraX",
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
    images: [],
    videoUrl: "",
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
  cardvault: {
    title: "CardVault",
    subtitle: "Card Portfolio Manager and Tracker",
    description:
      "CardVault is a full-stack Pokemon card portfolio tracker that helps collectors manage, analyze, and grow their card collections. The platform allows users to catalog every card they own, track graded and ungraded value, record purchase details, and view profit/loss over time. Real-time market prices are integrated directly from the Pokémon TCG API, enabling accurate portfolio valuation and historical trend analysis. Users can browse their collection through advanced filtering by set, type, rarity, grade, and price range. The application also includes a wishlist with automated target-price monitoring, detailed card profiles with imagery and stats, an achievement system, and interactive charts for tracking collection growth. Built with a modern React + TypeScript frontend and a Spring Boot backend backed by PostgreSQL, CardVault delivers a fast, responsive experience with secure authentication and clean UI components powered by Tailwind and shadcn/ui.",
    frontend: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Axios",
      "Recharts",
      "Sonner",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JWT",
      "Lombok",
      "Maven",
    ],
    database: ["PostgreSQL"],
    externalApis: ["Pokemon TCG API"],
    features: [
      "Full collection management system",
      "Add and track Pokemon cards (more cards coming soon!)",
      "Purchase price logging",
      "Acquisition date storage",
      "Automatic market price fetching",
      "Collection value history tracking",
      "Interactive value charts",
      "Profit and loss tracking",
      "Advanced card search",
      "Card details with images and stats",
      "Modern responsive UI",
      "Interactive analytics",
    ],
    images: [
      "https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=CardVault+Dashboard",
      "https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Card+Management",
      "https://via.placeholder.com/800x600/10B981/FFFFFF?text=Security+Features",
    ],
    githubUrl: "https://github.com/mdsingh2002/CardVault",
    challenges: [
      "Synchronizing real-time price updates with database state",
      "Handling rate limits from the Pokemon TCG API",
      "Maintaining accurate value history snapshots",
      "Designing a clean REST API for all card operations",
      "Managing authentication and JWT securely",
      "Structuring complex entity relationships in PostgreSQL",
      "Optimizing Spring Boot queries for large collections",
      "Ensuring UI remains fast while rendering many cards",
      "State management across multiple React pages",
      "Image loading performance for thousands of cards",
    ],
    learnings: [
      "How to build a full-stack application with React and Spring Boot",
      "Designing a scalable REST API",
      "Implementing JWT authentication",
      "Using PostgreSQL with JPA and Hibernate",
      "Creating responsive UI with Tailwind and shadcn/ui",
      "Integrating third-party APIs for real-time data",
      "Building analytics dashboards and charts",
      "Managing complex relational data models",
      "Optimizing React performance for large datasets",
      "Implementing value tracking and history snapshots",
    ],
  },
  "algo-trading": {
    title: "Algorithmic Trading Backtesting Platform",
    subtitle: "Advanced Trading Strategy Simulation & Analysis",
    description:
      "A comprehensive platform for testing and analyzing trading strategies using historical market data. This tool allows traders to simulate their algorithms against real market conditions, providing detailed performance metrics and insights to optimize trading strategies before risking real capital.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Flask",
      "Interactive Brokers API",
    ],
    features: [
      "Historical data backtesting engine",
      "Multiple built-in trading strategies (e.g., Moving Average Crossover, Mean Reversion, Momentum)",
      "Performance analytics and visualization",
      "Risk management metrics",
      "Modern web dashboard for monitoring trades",
      "Live updates of positions and performance",
    ],
    images: [
      "/projects/algo-trading/Panda2.png",
      "/projects/algo-trading/Panda3.png",
      "/projects/algo-trading/Panda5.png",
    ],
    githubUrl:
      "https://github.com/mdsingh2002/Algorithmic-Trading-Backtesting-Platform",
    demoUrl: "https://algorithmic-trading-backtesting-platform.onrender.com/",
    challenges: [
      "Processing large volumes of historical market data efficiently",
      "Accurately simulating market conditions and slippage",
      "Optimizing algorithm performance for fast backtesting",
    ],
    learnings: [
      "Financial market mechanics and trading strategies",
      "Data analysis and visualization techniques",
      "Performance optimization for data-intensive applications",
    ],
  },
  "stock-predictor": {
    title: "Stock Price Predictor",
    subtitle: "Machine Learning-Based Stock Market Analysis",
    description:
      "A machine learning application that analyzes historical stock market data to predict future price movements. Using advanced algorithms and technical indicators, this tool provides insights to help inform investment decisions through data-driven predictions and trend analysis.",
    technologies: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "MatPlotLib",
    ],
    features: [
      "Fetches real historical stock data from Yahoo Finance using pandas_datareader",
      "Preprocesses stock prices using MinMaxScaler to normalize values for neural network training",
      "Creates 60-day rolling windows of past closing prices to predict the next day’s price",
      "Builds a multi-layer LSTM neural network with dropout regularization to predict stock price trends.",
      "Evaluates performance by comparing predicted prices vs actual prices on unseen test data",
      "Visualizes predictions using Matplotlib with clear actual vs predicted line graphs",
    ],
    images: [],
    githubUrl: "https://github.com/mdsingh2002/Stock-Price-Predictor",
    challenges: [
      "Training accurate models with volatile market data",
      "LSTM networks require large amounts of data to generalize well.",
      "Risk of overfitting when training only on one company",
    ],
    learnings: [
      "Learned how to preprocess and scale time-series data for machine learning",
      "Gained experience building and training LSTM neural networks with TensorFlow",
      "Improved skills in fetching and manipulating real-world financial data using Pandas",
      "Learned how to visualize predictions and evaluate model performance",
    ],
  },
  cookbook: {
    title: "Cookbook",
    subtitle: "Digital Recipe Management Platform",
    description:
      "A modern recipe management application that helps users organize and save their favorite recipes.",
    technologies: ["HTML", "CSS", "Javascript"],
    features: [
      "Allow users create, view, edit, and delete their “favorite recipes",
      "Saves the recipes onto the user's local machine",
    ],
    images: [],
    githubUrl: "https://github.com/mdsingh2002/Cookbook",
    challenges: [
      "Designing an intuitive recipe input interface",
      "Saving the recipes locally",
    ],
    learnings: [
      "This was my first time using JavaScript, HTML, and CSS, and this project taught me how these technologies work together to build an interactive web application.",
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
                className="flex items-center gap-2 px-4 py-2 glass-heavy rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 hover:shadow-glass-hover"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="card-glass overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
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

        {/* Technologies */}
        {(project.technologies || project.frontend || project.backend) && (
          <div className="card-glass p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies Used
            </h2>

            {project.frontend && project.backend ? (
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.backend.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database */}
                {project.database && (
                  <div>
                    <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                      Database
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.database.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* External APIs */}
                {project.externalApis && (
                  <div>
                    <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-3">
                      External APIs
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.externalApis.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass-heavy text-gray-900 dark:text-white rounded-lg font-medium text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

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
