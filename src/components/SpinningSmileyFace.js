import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';

const SpinningSmileyFace = () => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.15;
    }
  });

  return (
    <group ref={meshRef} scale={[3, 3, 3]}>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color={'yellow'} />
      </Sphere>
      <Sphere args={[0.075, 32, 32]} position={[-0.25, 0.4, 0.9]}>
        <meshStandardMaterial color={'black'} />
      </Sphere>
      <Sphere args={[0.075, 32, 32]} position={[0.25, 0.4, 0.9]}>
        <meshStandardMaterial color={'black'} />
      </Sphere>
      <Torus args={[0.2, 0.05, 16, 100]} position={[0, -0.15, 0.92]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color={'black'} />
      </Torus>
      <Torus args={[0.15, 0.025, 16, 100]} position={[-0.25, 0.4, 0.95]} rotation={[Math.PI / 20, 0, 0]}>
        <meshStandardMaterial color={'grey'} />
      </Torus>
      <Torus args={[0.15, 0.025, 16, 100]} position={[0.25, 0.4, 0.95]} rotation={[Math.PI / 20, 0, 0]}>
        <meshStandardMaterial color={'grey'} />
      </Torus>
      <Box args={[0.2, 0.025, 0.025]} position={[0, 0.4, 0.95]}>
        <meshStandardMaterial color={'grey'} />
      </Box>
    </group>
  );
};

export default SpinningSmileyFace;
