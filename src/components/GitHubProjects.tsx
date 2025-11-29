import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import {
  fetchUserRepos,
  fetchSpecificRepo,
  Repository,
} from "../services/github";
import { GITHUB_USERNAME } from "../config";

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
        const reposData = await fetchUserRepos(GITHUB_USERNAME);

        // Fetch a specific repo that I have worked on previously for CMPUT 301
        try {
          const contributedRepo = await fetchSpecificRepo(
            "CMPUT301W24T21",
            "ScanNPlan"
          );
          setRepos([contributedRepo, ...reposData]);
        } catch (err) {
          console.error("Error fetching contributed repo:", err);
          setRepos(reposData);
        }
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
            GitHub Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Open source projects and code repositories
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
