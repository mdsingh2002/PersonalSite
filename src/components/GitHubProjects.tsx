import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { fetchUserRepos, fetchSpecificRepo, Repository } from '../services/github';
import { GITHUB_USERNAME } from '../config';

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const reposData = await fetchUserRepos(GITHUB_USERNAME);

        // Fetch a specific repo that I have worked on previously for CMPUT 301
        try {
          const contributedRepo = await fetchSpecificRepo('CMPUT301W24T21', 'ScanNPlan');
          setRepos([contributedRepo, ...reposData]);
        } catch (err) {
          console.error('Error fetching contributed repo:', err);
          setRepos(reposData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const languages = ['all', ...new Set(repos.map(repo => repo.language).filter((lang): lang is string => lang !== null))];

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLanguage = selectedLanguage === 'all' || repo.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Open source projects and code repositories
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Loading projects...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center bg-red-50 dark:bg-red-900/20 p-8 rounded-lg border border-red-200 dark:border-red-800 max-w-md">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Error Loading Projects</h3>
              <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
            </div>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Projects Grid */}
            {filteredRepos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-6 text-center text-gray-600 dark:text-gray-400">
                  Showing {filteredRepos.length} of {repos.length} projects
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {filteredRepos.map(repo => (
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
