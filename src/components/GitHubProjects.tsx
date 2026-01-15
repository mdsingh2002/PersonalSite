import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import {
  fetchUserRepos,
  fetchSpecificRepo,
  fetchRepoLanguages,
  Repository,
} from "../services/github";
import { GITHUB_USERNAME } from "../config";

// Featured Projects Configuration
const FEATURED_PROJECTS: {
  owner: string;
  repo: string;
  custom_description?: string;
  demo_url?: string;
  docs_url?: string;
  project_details_url?: string;
  hide_demo?: boolean;
}[] = [
  {
    owner: "CMPUT301W24T21",
    repo: "ScanNPlan",
    custom_description:
      "Android event planning app with QR code scanning, real-time notifications, and Google Maps integration for managing attendees and events.",
    project_details_url: "/projects/scannplan",
  },
  {
    owner: GITHUB_USERNAME,
    repo: "CardVault",
    custom_description:
      "A full-stack web application for managing and tracking your card collections. Monitor card values, build wishlists, and analyze your collection's worth over time.",
    project_details_url: "/projects/cardvault",
  },
  {
    owner: GITHUB_USERNAME,
    repo: "Algorithmic-Trading-Backtesting-Platform",
    custom_description:
      "Python-based backtesting platform for algorithmic trading strategies with performance metrics and visualization tools.",
    project_details_url: "/projects/algo-trading",
  },
  {
    owner: GITHUB_USERNAME,
    repo: "Stock-Price-Predictor",
    custom_description:
      "Machine learning model for stock price prediction using LSTM networks and technical indicators.",
    project_details_url: "/projects/stock-predictor",
  },
  {
    owner: GITHUB_USERNAME,
    repo: "Cookbook",
    custom_description:
      "Recipe management web application with search functionality and ingredient tracking.",
    project_details_url: "/projects/cookbook",
  },
  {
    owner: GITHUB_USERNAME,
    repo: "PersonalSite",
    custom_description:
      "Portfolio website that you are currently on built with React, TypeScript, and Tailwind CSS. Features dark mode, GitHub API integration, and interactive 3D visualizations.",
    hide_demo: true,
  },
  {
    owner: "mdsingh2002",
    repo: "Pharmacy-Sales-Data",
    custom_description:
      "Data analytics project analyzing pharmacy sales trends, inventory management, and customer purchase patterns using Python and visualization tools.",
    project_details_url: "/projects/pharmacy-sales",
  },
  {
    owner: "mdsingh2002",
    repo: "Emergency-Fire-Response-Edmonton-Analytics",
    custom_description:
      "Analytical study of emergency fire response data in Edmonton, examining response times, incident patterns, and resource allocation using data science techniques.",
    project_details_url: "/projects/fire-response",
  },
];

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch all featured projects
        const featuredRepos: Repository[] = [];

        for (const project of FEATURED_PROJECTS) {
          try {
            const repo = await fetchSpecificRepo(project.owner, project.repo);

            // Fetch all languages used in the repo
            const languages = await fetchRepoLanguages(
              project.owner,
              project.repo
            );
            repo.languages = languages;

            // Add custom description if provided
            if (project.custom_description) {
              repo.custom_description = project.custom_description;
            }

            // Add custom links if provided
            if (project.demo_url) repo.demo_url = project.demo_url;
            if (project.docs_url) repo.docs_url = project.docs_url;
            if (project.project_details_url)
              repo.project_details_url = project.project_details_url;
            if (project.hide_demo) repo.hide_demo = project.hide_demo;

            featuredRepos.push(repo);
          } catch (err) {
            console.error(
              `Error fetching ${project.owner}/${project.repo}:`,
              err
            );
          }
        }

        setRepos(featuredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const languages = [
    "all",
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter((lang): lang is string => lang !== null)
    ),
  ];

  const filteredRepos = repos.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description &&
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage =
      selectedLanguage === "all" || repo.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header*/}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Showcase of selected projects and repositories
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Loading projects...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <div className="card-glass p-8 max-w-md mx-auto text-center border-2 border-red-200 dark:border-red-800/30">
              <svg
                className="w-16 h-16 text-red-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
                Error Loading Projects
              </h3>
              <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Filters - Glass effect */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl glass-heavy text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300"
                />
              </div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-5 py-3 rounded-2xl glass-heavy text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-300 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === "all" ? "All Languages" : lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Projects Grid */}
            {filteredRepos.length === 0 ? (
              <div className="card-glass p-12 text-center max-w-md mx-auto">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No projects found matching your criteria.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 glass-heavy rounded-full text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                    Showing {filteredRepos.length} of {repos.length} projects
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRepos.map((repo) => (
                    <ProjectCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
