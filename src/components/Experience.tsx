import { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiDotnet,
  SiReact,
  SiMui,
  SiGithub,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { VscCode, VscAzure } from "react-icons/vsc";

interface Technology {
  name: string;
  Icon: IconType;
}

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: Technology[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "SMA Consulting",
    location: "Edmonton, AB",
    period: "Jan 2025 - Aug 2025",
    description: [
      "Developed RESTful APIs with C#, ASP.NET, and CosmosDB for project management, reducing report generation time",
      "Implemented Monte Carlo Tree Search algorithm for cost analysis, increasing simulation accuracy",
      "Designed GitHub Actions CI/CD pipeline for automated deployment through Azure Front Door",
      "Built responsive React frontend with Material UI for modern user experience",
      "Developed comprehensive xUnit test suites, reducing production bugs",
      "Delivered full-stack features on schedule in an Agile environment",
    ],
    technologies: [
      { name: "C#", Icon: TbBrandCSharp },
      { name: "ASP.NET", Icon: SiDotnet },
      { name: "SQL", Icon: SiMysql },
      { name: "React", Icon: SiReact },
      { name: "Material UI", Icon: SiMui },
      { name: "GitHub Actions", Icon: SiGithub },
      { name: "Azure", Icon: VscAzure },
      { name: "xUnit", Icon: VscCode },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Apple style */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
            Building innovative solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glass line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-200/50 via-brand-300/50 to-brand-200/50 dark:from-brand-800/50 dark:via-brand-700/50 dark:to-brand-800/50 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-16 last:mb-0 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:pl-12 md:ml-auto md:text-left"
              } md:w-1/2 relative`}
            >
              {/* Timeline dot - glass effect */}
              <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 shadow-soft-md animate-scale-in"></div>
                <div className="absolute w-12 h-12 rounded-full glass opacity-40 animate-pulse"></div>
              </div>

              {/* Content card - glassmorphism */}
              <div className="card-glass card-glass-hover p-8 animate-fade-up group">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-brand-600 dark:text-brand-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {exp.location}
                  </p>
                </div>

                {/* Period badge - glass */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 glass-heavy rounded-full text-sm font-medium text-brand-700 dark:text-brand-300">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <svg
                        className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies - glass badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-3 py-2 glass-heavy rounded-lg hover:bg-brand-500/10 dark:hover:bg-brand-400/10 transition-all duration-300 ease-apple cursor-pointer group/tech"
                      title={tech.name}
                    >
                      <tech.Icon
                        size={18}
                        className="text-gray-700 dark:text-gray-300 group-hover/tech:text-brand-600 dark:group-hover/tech:text-brand-400 transition-colors duration-300"
                      />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/tech:text-brand-600 dark:group-hover/tech:text-brand-400 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
