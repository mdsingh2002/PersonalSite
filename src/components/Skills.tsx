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
  const [view, setView] = useState<"keyboard" | "globe">("globe");
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
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-all duration-700 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          Skills & Technologies
        </h2>
        <p
          className={`text-center text-gray-600 dark:text-gray-400 mb-8 transition-all duration-700 delay-200 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {view === "keyboard"
            ? "Hover over the keys to explore"
            : "Drag to rotate • Hover & click icons to explore"}
        </p>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-1">
            <button
              onClick={() => setView("globe")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                view === "globe"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              3D Globe
            </button>
            <button
              onClick={() => setView("keyboard")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                view === "keyboard"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Flat Format
            </button>
          </div>
        </div>

        {/* Globe View */}
        {view === "globe" && (
          <div className="max-w-6xl mx-auto">
            <SkillsGlobe skills={allSkills} />
          </div>
        )}

        {/* Keyboard View */}
        {view === "keyboard" && (
          <div className="max-w-5xl mx-auto perspective-container relative">
            <div className="keyboard-container">
              {keyboardRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="keyboard-row"
                  style={{
                    paddingLeft: `${rowIndex * 10}px`, // Stagger each row slightly
                  }}
                >
                  {row.map((skill, index) => {
                    const globalIndex = rowIndex * 10 + index;

                    return (
                      <div
                        key={skill.name}
                        className={`keycap-wrapper ${
                          hasAnimated ? "keycap-dropped" : "keycap-hidden"
                        }`}
                        style={{
                          animationDelay: hasAnimated
                            ? `${globalIndex * 0.08}s`
                            : "0s",
                        }}
                      >
                        <Keycap
                          skill={skill.name}
                          category={skill.category}
                          Icon={skill.Icon}
                          index={globalIndex}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
