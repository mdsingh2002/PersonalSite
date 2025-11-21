import { useState } from "react";
import { IconType } from "react-icons";

interface KeycapProps {
  skill: string;
  category: string;
  index: number;
  Icon: IconType;
}

export default function Keycap({ skill, category, index, Icon }: KeycapProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Keycap */}
      <div
        className="keycap group cursor-pointer"
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Keycap body */}
        <div className="keycap-body">
          {/* Icon on keycap */}
          <div className="keycap-icon">
            <Icon size={32} />
          </div>
          {/* Skill label below icon */}
          <div className="keycap-label">{skill}</div>
        </div>
      </div>

      {/* Hover information*/}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm border border-gray-700">
            <div className="font-bold">{skill}</div>
            <div className="text-xs text-gray-300 mt-1">{category}</div>
            {/* Text Box arrow*/}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
              <div className="border-[6px] border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
