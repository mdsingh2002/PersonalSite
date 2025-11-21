import { useEffect, useState } from "react";
import { fetchUserProfile, UserProfile } from "../services/github";
import { GITHUB_USERNAME } from "../config";

export default function About() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await fetchUserProfile(GITHUB_USERNAME);
        setProfile(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProfile();
  }, []);

  if (loading) {
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-r-transparent"></div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {profile?.name || GITHUB_USERNAME}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a Full Stack Software Developer & Electronics Enthusiast
              </p>
            </div>

            {profile?.bio && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {profile.bio}
              </p>
            )}

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {profile?.public_repos && (
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {profile.public_repos}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </span>
                </div>
              )}
              {profile?.followers && profile.followers > 0 && (
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {profile.followers}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Followers
                  </span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {profile?.html_url && (
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              )}
              {profile?.blog && (
                <a
                  href={
                    profile.blog.startsWith("http")
                      ? profile.blog
                      : `https://${profile.blog}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Website
                </a>
              )}
            </div>
          </div>

          {/* Profile Image */}
          {profile?.avatar_url && (
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                <img
                  src={profile.avatar_url}
                  alt={profile.name || GITHUB_USERNAME}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
