import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

/**
 * FloatingShape Component
 * Animated 3D sphere with distortion effect for hero section
 */
const FloatingShape = () => {
  const meshRef = useRef();

  // Animate the shape
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Float up and down
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default FloatingShape;
