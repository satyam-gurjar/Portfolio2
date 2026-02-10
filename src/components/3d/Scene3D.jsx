import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingShape from './FloatingShape';

/**
 * Scene3D Component
 * Main 3D scene wrapper with controls and lighting
 */
const Scene3D = ({ children, enableControls = false }) => {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#0ea5e9" />
      
      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade={true}
        speed={1}
      />
      
      {/* 3D Content */}
      <Suspense fallback={null}>
        {children || <FloatingShape />}
      </Suspense>
      
      {/* Interactive controls (optional) */}
      {enableControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}
    </Canvas>
  );
};

export default Scene3D;
