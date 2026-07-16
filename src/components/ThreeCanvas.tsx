import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/* Rotating star field */
function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 350;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
      ref.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.55}
      />
    </Points>
  );
}

/* Small glowing planet */
function Planet() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.position.x = Math.sin(t * 0.12) * 1.5 - 3;
      meshRef.current.position.y = Math.cos(t * 0.09) * 0.8 + 1.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = t * 0.18;
      ringRef.current.position.x = Math.sin(t * 0.12) * 1.5 - 3;
      ringRef.current.position.y = Math.cos(t * 0.09) * 0.8 + 1.5;
      ringRef.current.rotation.x = 1.1;
    }
  });

  return (
    <>
      {/* Planet sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#B8922A"
          emissiveIntensity={0.5}
          roughness={0.5}
          metalness={0.4}
        />
      </mesh>
      {/* Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.7, 0.06, 8, 48]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#D4AF37"
          emissiveIntensity={0.35}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Ambient + point light for planet glow */}
      <pointLight position={[-3, 1.5, 2]} color="#D4AF37" intensity={1.0} distance={8} />
    </>
  );
}

/* CSS fallback for no-WebGL — stars-only, dark mode */
function CSSFallback() {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        size: Math.random() * 2.5 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        dur: 4 + Math.random() * 5,
        opacity: 0.1 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: p.opacity,
            animation: `floatParticle ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export function ThreeCanvas() {
  if (!isWebGLAvailable()) return <CSSFallback />;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ failIfMajorPerformanceCaveat: false, antialias: false, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.2} />
        <StarField />
        <Planet />
      </Canvas>
    </div>
  );
}
