import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const SpinningCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full h-screen flex items-center justify-center bg-gray-900">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <SpinningCube />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
