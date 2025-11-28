import { useState, useEffect, useRef } from "react";
import Keycap from "./Keycap";
import SkillsGlobe from "./SkillsGlobe";
import {
  SiC,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiTypescript,
  SiNumpy,
  SiDotnet,
  SiScikitlearn,
  SiReact,
  SiMui,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiIntellijidea,
  SiPostman,
  SiDocker,
  SiPandas,
  SiPlotly,
  SiTensorflow,
  SiMongodb,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import { VscCode, VscAzure } from "react-icons/vsc";

export default function Skills() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [view, setView] = useState<"grid" | "globe">("globe");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  const skills = {
    languages: [
      { name: "C", Icon: SiC },
      { name: "C#", Icon: TbBrandCSharp },
      { name: "Python", Icon: SiPython },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "SQL", Icon: SiMysql },
      { name: "Java", Icon: FaJava },
      { name: "TypeScript", Icon: SiTypescript },
    ],
    frameworks: [
      { name: "NumPy", Icon: SiNumpy },
      { name: ".NET", Icon: SiDotnet },
      { name: "Scikit-learn", Icon: SiScikitlearn },
      { name: "ReactJS", Icon: SiReact },
      { name: "Material-UI", Icon: SiMui },
    ],
    tools: [
      { name: "Visual Studio", Icon: VscCode },
      { name: "VS Code", Icon: TbBrandVscode },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Android Studio", Icon: SiAndroidstudio },
      { name: "IntelliJ", Icon: SiIntellijidea },
      { name: "Postman", Icon: SiPostman },
      { name: "Docker", Icon: SiDocker },
      { name: "Azure", Icon: VscAzure },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    libraries: [
      { name: "Pandas", Icon: SiPandas },
      { name: "Matplotlib", Icon: SiPlotly },
      { name: "TensorFlow", Icon: SiTensorflow },
    ],
  };

  let globalIndex = 0;

  // Flatten all skills into keyboard layout
  const allSkills = [
    ...skills.languages.map((s) => ({ ...s, category: "Language" })),
    ...skills.frameworks.map((s) => ({ ...s, category: "Framework" })),
    ...skills.tools.map((s) => ({ ...s, category: "Developer Tool" })),
    ...skills.libraries.map((s) => ({ ...s, category: "Library" })),
  ];

  // Arrange skills in keyboard-like rows
  const keyboardRows = [
    allSkills.slice(0, 9), // Top row - 9 keys
    allSkills.slice(9, 17), // Second row - 8 keys
    allSkills.slice(17, 25), // Third row - 8 keys
    allSkills.slice(25), // Bottom row - remaining keys
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Apple style */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight animate-fade-up">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light animate-fade-up">
            {view === "grid"
              ? "Technologies I work with"
              : "Interactive 3D visualization"}
          </p>
        </div>

        {/* View Toggle - Glass pill */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="inline-flex rounded-full glass p-1.5 shadow-soft-md">
            <button
              onClick={() => setView("globe")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-apple ${
                view === "globe"
                  ? "bg-brand-500 text-white shadow-soft-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40"
              }`}
            >
              3D Globe
            </button>
            <button
              onClick={() => setView("grid")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-apple ${
                view === "grid"
                  ? "bg-brand-500 text-white shadow-soft-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40"
              }`}
            >
              Grid View
            </button>
          </div>
        </div>

        {/* Globe View */}
        {view === "globe" && (
          <div className="max-w-6xl mx-auto">
            <SkillsGlobe skills={allSkills} />
          </div>
        )}

        {/* Grid View - Glassmorphism cards by category */}
        {view === "grid" && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Languages */}
            <div className="card-glass p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.languages.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-heavy rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-glass-hover transition-all duration-300 ease-apple cursor-pointer group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <skill.Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="card-glass p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[...skills.frameworks, ...skills.libraries].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-heavy rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-glass-hover transition-all duration-300 ease-apple cursor-pointer group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <skill.Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card-glass p-8 animate-fade-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                Developer Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.tools.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-heavy rounded-2xl p-4 flex flex-col items-center gap-3 hover:shadow-glass-hover transition-all duration-300 ease-apple cursor-pointer group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <skill.Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
