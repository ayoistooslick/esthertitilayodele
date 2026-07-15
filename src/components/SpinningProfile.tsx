import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SpinningRings() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.y = t * 0.6;
      ring1.current.rotation.x = Math.sin(t * 0.25) * 0.4;
    }
    if (ring2.current) {
      ring2.current.rotation.y = -t * 0.4;
      ring2.current.rotation.z = t * 0.3;
    }
    if (ring3.current) {
      ring3.current.rotation.x = t * 0.35;
      ring3.current.rotation.z = -t * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 3]} intensity={1.5} color="#EA580C" />
      {/* Outer ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.62, 0.035, 12, 100]} />
        <meshStandardMaterial
          color="#EA580C"
          emissive="#EA580C"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Middle ring */}
      <mesh ref={ring2}>
        <torusGeometry args={[1.75, 0.022, 10, 100]} />
        <meshStandardMaterial
          color="#F97316"
          emissive="#F97316"
          emissiveIntensity={0.4}
          transparent
          opacity={0.75}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
      {/* Inner accent ring */}
      <mesh ref={ring3}>
        <torusGeometry args={[1.48, 0.018, 10, 100]} />
        <meshStandardMaterial
          color="#C2410C"
          emissive="#C2410C"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          roughness={0.4}
          metalness={0.5}
        />
      </mesh>
    </>
  );
}

interface SpinningProfileProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SpinningProfile({ src, alt = 'Profile', size = 'md' }: SpinningProfileProps) {
  const sizeMap = {
    sm: 'w-44 h-44',
    md: 'w-56 h-56 md:w-64 md:h-64',
    lg: 'w-64 h-64 md:w-80 md:h-80',
  };

  return (
    <div className={`relative ${sizeMap[size]} mx-auto`}>
      {/* Glow behind image */}
      <div className="absolute inset-4 rounded-full bg-primary/20 blur-xl -z-10" />
      {/* Circular profile image */}
      <div className="absolute inset-[14%] rounded-full overflow-hidden z-10 shadow-xl ring-2 ring-primary/30">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 12%' }}
          loading="lazy"
        />
      </div>
      {/* Three.js spinning rings overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
          style={{ background: 'transparent' }}
        >
          <SpinningRings />
        </Canvas>
      </div>
    </div>
  );
}
