import Keycap from "./Keycap";
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
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default function Skills() {
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
    ],
    libraries: [
      { name: "Pandas", Icon: SiPandas },
      { name: "Matplotlib", Icon: SiPlotly },
      { name: "TensorFlow", Icon: SiTensorflow },
    ],
  };

  let globalIndex = 0;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        {/* <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Hover over the keys to see more details
        </p> */}

        <div className="max-w-6xl mx-auto">
          {/* Languages (Potentiall change to amount of years used?)*/}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="bg-blue-500 w-3 h-3 rounded-full mr-3"></span>
              Languages
            </h3>
            <div className="keyboard-row">
              {skills.languages.map((skill) => (
                <Keycap
                  key={skill.name}
                  skill={skill.name}
                  category="Language"
                  Icon={skill.Icon}
                  index={globalIndex++}
                />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
              Frameworks
            </h3>
            <div className="keyboard-row">
              {skills.frameworks.map((skill) => (
                <Keycap
                  key={skill.name}
                  skill={skill.name}
                  category="Framework"
                  Icon={skill.Icon}
                  index={globalIndex++}
                />
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="bg-purple-500 w-3 h-3 rounded-full mr-3"></span>
              Developer Tools
            </h3>
            <div className="keyboard-row">
              {skills.tools.map((skill) => (
                <Keycap
                  key={skill.name}
                  skill={skill.name}
                  category="Developer Tool"
                  Icon={skill.Icon}
                  index={globalIndex++}
                />
              ))}
            </div>
          </div>

          {/* Libraries that I have used */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="bg-orange-500 w-3 h-3 rounded-full mr-3"></span>
              Libraries
            </h3>
            <div className="keyboard-row">
              {skills.libraries.map((skill) => (
                <Keycap
                  key={skill.name}
                  skill={skill.name}
                  category="Library"
                  Icon={skill.Icon}
                  index={globalIndex++}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
