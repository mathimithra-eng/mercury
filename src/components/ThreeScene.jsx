import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment, Stars } from '@react-three/drei';

const MercurySphere = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#cbd5e1"
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0}
          metalness={1}
          bumpScale={0.005}
          emissive="#1a7fa0"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </Float>
  );
};

const ThreeScene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <MercurySphere />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
