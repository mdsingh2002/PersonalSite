import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType;
  category: string;
}

interface SkillPoint {
  position: THREE.Vector3;
  skill: Skill;
}

interface SkillsGlobeProps {
  skills: Skill[];
}

// Component for individual skill points on the globe
function SkillPoint({ position, skill, onClick }: { position: THREE.Vector3; skill: Skill; onClick: () => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle floating animation
      const scale = hovered ? 1.3 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);

      // Subtle bob animation
      groupRef.current.position.y = position.y + Math.sin(clock.getElapsedTime() * 2 + position.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Background glow */}
      <mesh>
        <circleGeometry args={[0.25, 32]} />
        <meshBasicMaterial
          color={hovered ? "#60a5fa" : "#3b82f6"}
          transparent
          opacity={hovered ? 0.4 : 0.2}
        />
      </mesh>

      {/* Skill Icon as HTML */}
      <Html
        center
        distanceFactor={6}
        zIndexRange={[0, 0]}
        style={{
          transition: "all 0.2s",
          pointerEvents: "auto",
        }}
      >
        <div
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative cursor-pointer"
          style={{
            transform: hovered ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.2s",
          }}
        >
          {/* Icon container with glow effect */}
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
              hovered
                ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                : "bg-blue-600/80 backdrop-blur-sm"
            }`}
          >
            <skill.Icon className="text-2xl text-white" />
          </div>

          {/* Skill name tooltip - show on hover */}
          {hovered && (
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap shadow-xl">
              {skill.name}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

// Rotating globe with wireframe
function Globe({ skillPoints, onSkillClick }: { skillPoints: SkillPoint[]; onSkillClick: (skill: Skill) => void }) {
  const globeRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    // Slow rotation
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }

    // Gentle pulsing of wireframe
    if (wireframeRef.current) {
      wireframeRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02);
    }
  });

  return (
    <group ref={globeRef}>
      {/* Main wireframe sphere */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glow sphere */}
      <Sphere args={[2.4, 32, 32]}>
        <meshStandardMaterial
          color="#1e40af"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Skill points */}
      {skillPoints.map((point, index) => (
        <SkillPoint
          key={index}
          position={point.position}
          skill={point.skill}
          onClick={() => onSkillClick(point.skill)}
        />
      ))}

      {/* Ambient particles */}
      <Points count={200} />
    </group>
  );
}

// Floating particles around the globe
function Points({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    particles[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    particles[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particles[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function SkillsGlobe({ skills }: SkillsGlobeProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Distribute skills evenly on sphere surface using Fibonacci sphere algorithm
  const skillPoints: SkillPoint[] = skills.map((skill, i) => {
    const phi = Math.acos(1 - 2 * (i + 0.5) / skills.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const radius = 2.5;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return {
      position: new THREE.Vector3(x, y, z),
      skill,
    };
  });

  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="bg-transparent"
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />

        {/* Globe with skills */}
        <Globe skillPoints={skillPoints} onSkillClick={setSelectedSkill} />

        {/* Interactive controls - drag to rotate */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Skill info panel */}
      {selectedSkill && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border-2 border-blue-500 min-w-[200px] text-center">
          <div className="flex items-center justify-center gap-3">
            <selectedSkill.Icon className="text-3xl text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {selectedSkill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedSkill.category}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
        Drag to rotate • Hover & click icons to explore
      </div>
    </div>
  );
}
