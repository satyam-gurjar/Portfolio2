import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Octahedron, Icosahedron } from '@react-three/drei';

/**
 * FloatingIcons Component
 * Multiple floating geometric shapes representing tech stack with enhanced animations
 */
const FloatingIcons = () => {
  return (
    <group>
      {/* React - Blue */}
      <FloatingBox position={[-3, 2, 0]} color="#61dafb" scale={0.6} />
      
      {/* Node.js - Green */}
      <FloatingSphere position={[3, 1, 0]} color="#68a063" scale={0.4} />
      
      {/* JavaScript - Yellow */}
      <FloatingTorus position={[-2, -1, 1]} color="#f0db4f" scale={0.5} />
      
      {/* AI/ML - Cyan */}
      <FloatingOctahedron position={[2, -2, 0]} color="#0ea5e9" scale={0.5} />
      
      {/* MongoDB - Purple */}
      <FloatingBox position={[0, 2.5, -1]} color="#8b5cf6" scale={0.5} />
      
      {/* Additional shapes for more visual interest */}
      <FloatingIcosahedron position={[-3, -2, -0.5]} color="#ec4899" scale={0.4} />
      <FloatingTorus position={[3, 2.5, -1]} color="#10b981" scale={0.4} />
      <FloatingSphere position={[0, -2, 1]} color="#f59e0b" scale={0.3} />
    </group>
  );
};

// Individual floating shapes with enhanced animations
const FloatingBox = ({ position, color, scale = 0.5 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.7;
    meshRef.current.rotation.y = time * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.4;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.5) * 0.2;
  });

  return (
    <Box ref={meshRef} position={position} args={[scale, scale, scale]}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Box>
  );
};

const FloatingSphere = ({ position, color, scale = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.6;
    meshRef.current.rotation.y = time * 0.6;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0] + 1) * 0.4;
    meshRef.current.position.z = position[2] + Math.sin(time * 0.3) * 0.3;
  });

  return (
    <Sphere ref={meshRef} position={position} args={[scale, 32, 32]}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
};

const FloatingTorus = ({ position, color, scale = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.8;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0] + 2) * 0.4;
    meshRef.current.position.x = position[0] + Math.sin(time * 0.4) * 0.2;
  });

  return (
    <Torus ref={meshRef} position={position} args={[scale, scale * 0.3, 16, 32]}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Torus>
  );
};

const FloatingOctahedron = ({ position, color, scale = 0.4 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.7;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0] + 3) * 0.4;
    meshRef.current.position.z = position[2] + Math.cos(time * 0.3) * 0.2;
  });

  return (
    <Octahedron ref={meshRef} position={position} args={[scale]}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </Octahedron>
  );
};

const FloatingIcosahedron = ({ position, color, scale = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.6;
    meshRef.current.rotation.z = time * 0.4;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0] + 4) * 0.3;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.6) * 0.2;
  });

  return (
    <Icosahedron ref={meshRef} position={position} args={[scale]}>
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Icosahedron>
  );
};

export default FloatingIcons;
