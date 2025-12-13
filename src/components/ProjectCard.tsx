import { Repository } from "../services/github";

interface ProjectCardProps {
  repo: Repository;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-blue-600",
    Java: "bg-red-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-600",
    Ruby: "bg-red-700",
    PHP: "bg-indigo-500",
    C: "bg-gray-600",
    "C++": "bg-pink-600",
    "C#": "bg-purple-600",
    Swift: "bg-orange-500",
    Kotlin: "bg-purple-500",
    HTML: "bg-orange-400",
    CSS: "bg-blue-400",
    Shell: "bg-green-600",
    Dart: "bg-teal-500",
    Groovy: "bg-cyan-600",
    XML: "bg-orange-300",
    Batchfile: "bg-green-500",
    default: "bg-gray-500",
  };

  const getLanguageColor = (language: string | null): string => {
    if (!language) return languageColors.default;
    return languageColors[language] || languageColors.default;
  };

  return (
    <div className="card-glass card-glass-hover p-6 group animate-fade-up h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-1 mr-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-300"
          >
            {repo.name}
          </a>
        </h3>
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 px-2.5 py-1 glass-heavy rounded-full text-amber-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">{repo.stargazers_count}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="flex-grow">
        {(repo.custom_description || repo.description) && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {repo.custom_description || repo.description}
          </p>
        )}
      </div>

      {/* Languages */}
      {repo.languages && repo.languages.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.languages.map((lang) => (
            <div
              key={lang}
              className="flex items-center gap-1.5 px-2.5 py-1 glass-heavy rounded-full"
            >
              <span
                className={`w-2 h-2 rounded-full ${getLanguageColor(lang)}`}
              ></span>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
                {lang}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-3 text-sm mb-4">

        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            </svg>
            <span>{repo.forks_count}</span>
          </div>
        )}

        {repo.open_issues_count > 0 && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
            </svg>
            <span>{repo.open_issues_count}</span>
          </div>
        )}
      </div>

      {/* Topics - Glass badges */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 text-xs font-medium glass-heavy rounded-full text-brand-700 dark:text-brand-300 hover:shadow-glass-hover transition-all duration-300"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Project Links */}
      <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
        {/* Project Details Link*/}
        {repo.project_details_url && (
          <a
            href={repo.project_details_url}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mb-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white rounded-lg font-medium transition-all duration-300 shadow-soft-sm hover:shadow-soft-md group/details"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Project Details
            <svg
              className="w-4 h-4 group-hover/details:translate-x-1 transition-transform"
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
        )}

        {/* Other Links */}
        <div className="flex flex-wrap gap-2 mb-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 glass-heavy rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 hover:shadow-glass-hover"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {(repo.homepage || repo.demo_url) && !repo.hide_demo && (
            <a
              href={repo.demo_url || repo.homepage || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 glass-heavy rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 hover:shadow-glass-hover"
            >
              <svg
                className="w-4 h-4"
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
          {repo.docs_url && (
            <a
              href={repo.docs_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 glass-heavy rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 hover:shadow-glass-hover"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
