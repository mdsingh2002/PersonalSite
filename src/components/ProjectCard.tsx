import { Repository } from '../services/github';

interface ProjectCardProps {
  repo: Repository;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const languageColors: Record<string, string> = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-500',
    Python: 'bg-blue-600',
    Java: 'bg-red-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-600',
    Ruby: 'bg-red-700',
    PHP: 'bg-indigo-500',
    C: 'bg-gray-600',
    'C++': 'bg-pink-600',
    'C#': 'bg-purple-600',
    Swift: 'bg-orange-500',
    Kotlin: 'bg-purple-500',
    default: 'bg-gray-500',
  };

  const getLanguageColor = (language: string | null): string => {
    if (!language) return languageColors.default;
    return languageColors[language] || languageColors.default;
  };

  return (
    <div className="card-glass card-glass-hover p-6 group animate-fade-up">
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
      {repo.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
          {repo.description}
        </p>
      )}

      {/* Stats and Language */}
      <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`}></span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{repo.language}</span>
          </div>
        )}

        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
            </svg>
            <span>{repo.forks_count}</span>
          </div>
        )}

        {repo.open_issues_count > 0 && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
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

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>
        <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </div>
  );
}
