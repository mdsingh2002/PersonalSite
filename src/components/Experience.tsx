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
      "Implemented Monte Carlo Tree Search algorithm for cost analysis, increasing simulation accuracy by 22%",
      "Designed GitHub Actions CI/CD pipeline for automated deployment through Azure Front Door",
      "Built responsive React frontend with Material UI for modern user experience",
      "Developed comprehensive xUnit test suites, achieving 90%+ coverage and reducing production bugs",
      "Delivered full-stack features on schedule in Agile environment",
    ],
    technologies: [
      { name: "C#", Icon: TbBrandCSharp },
      { name: "ASP.NET", Icon: SiDotnet },
      { name: "CosmosDB", Icon: SiMongodb },
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
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:ml-auto md:text-left"
                } md:w-1/2 relative`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>

                {/* Content card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul
                    className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <svg
                          className={`w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 ${
                            index % 2 === 0 ? "md:order-2" : ""
                          }`}
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

                  <div
                    className={`flex flex-wrap gap-3 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="tech-keycap text-white cursor-pointer"
                        title={tech.name}
                      >
                        <tech.Icon size={20} />
                        <span className="text-xs font-medium hidden sm:inline">
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
      </div>
    </section>
  );
}
