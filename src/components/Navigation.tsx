import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from the localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section determined by scroll pos
      const sections = [
        "about",
        "experience",
        "skills",
        "projects",
        "electronics",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation on page load or location change
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/#" + sectionId);
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "GitHub Projects" },
    { id: "electronics", label: "Electronics" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar-glass ${
        isScrolled ? "shadow-soft-lg" : ""
      } animate-slide-down`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("about")}
            className="text-xl font-semibold tracking-tight bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent transition-all duration-300 ease-apple hover:scale-105"
          >
            Mark Singh
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-apple ${
                      activeSection === item.id
                        ? "text-brand-600 dark:text-brand-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator - Highlighted when the section is being viewed*/}
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-brand-100/80 dark:bg-brand-900/30 rounded-full -z-10 animate-scale-in" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links*/}
            <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-gray-300/50 dark:border-gray-700/50">
              <a
                href="https://github.com/mdsingh2002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 ease-apple backdrop-blur-xl"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mark-singh007/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800/60 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 ease-apple backdrop-blur-xl"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Dark and Light Mode Toggle Slider */}
              <button
                onClick={toggleTheme}
                className="relative flex items-center gap-2 px-3 py-2 rounded-full glass hover:shadow-glass-hover transition-all duration-300 ease-apple group"
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {/* Sun icon */}
                <svg
                  className={`w-4 h-4 transition-all duration-300 ease-apple ${
                    theme === "light"
                      ? "text-amber-500"
                      : "text-gray-400 dark:text-gray-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

                {/* Slider track */}
                <div className="relative w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300">
                  {/* Slider thumb */}
                  <div
                    className={`absolute top-0.5 w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md transition-all duration-300 ease-apple ${
                      theme === "light" ? "left-0.5" : "left-5"
                    }`}
                  />
                </div>

                {/* Moon icon */}
                <svg
                  className={`w-4 h-4 transition-all duration-300 ease-apple ${
                    theme === "dark" ? "text-blue-400" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile - Theme toggle and menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Slider - Mobile */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center gap-2 px-3 py-2 rounded-full glass hover:shadow-glass-hover transition-all duration-300 ease-apple"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {/* Sun icon */}
              <svg
                className={`w-4 h-4 transition-all duration-300 ease-apple ${
                  theme === "light"
                    ? "text-amber-500"
                    : "text-gray-400 dark:text-gray-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>

              {/* Slider track */}
              <div className="relative w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300">
                {/* Slider thumb */}
                <div
                  className={`absolute top-0.5 w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md transition-all duration-300 ease-apple ${
                    theme === "light" ? "left-0.5" : "left-5"
                  }`}
                />
              </div>

              {/* Moon icon */}
              <svg
                className={`w-4 h-4 transition-all duration-300 ease-apple ${
                  theme === "dark" ? "text-blue-400" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-300 ease-apple">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
