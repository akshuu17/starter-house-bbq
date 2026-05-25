import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import biryaniImg from '../assets/best-chicken-dum-biryani-ichalkaranji.png';

// 1. Procedural Cardamom Mesh
const CardamomPod: React.FC<{ position: [number, number, number]; rotationSpeed: number; isMobile: boolean }> = ({ position, rotationSpeed, isMobile }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * delta;
      meshRef.current.rotation.y += rotationSpeed * 1.2 * delta;
    }
  });

  const finalScale = isMobile ? 0.08 : 0.15;

  return (
    <mesh ref={meshRef} position={position} scale={[finalScale, finalScale * 1.8, finalScale]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#707a4e"
        roughness={0.85}
        metalness={0.1}
        bumpScale={0.1}
      />
    </mesh>
  );
};

// 2. Procedural Clove Mesh
const ClovePod: React.FC<{ position: [number, number, number]; rotationSpeed: number; isMobile: boolean }> = ({ position, rotationSpeed, isMobile }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += rotationSpeed * delta;
      groupRef.current.rotation.z += rotationSpeed * 0.8 * delta;
    }
  });

  const finalScale = isMobile ? 0.06 : 0.1;

  return (
    <group ref={groupRef} position={position} scale={[finalScale, finalScale, finalScale]}>
      {/* Stem */}
      <mesh scale={[0.6, 2, 0.6]}>
        <cylinderGeometry args={[0.5, 0.4, 2, 8]} />
        <meshStandardMaterial color="#42291b" roughness={0.9} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 2.5, 0]} scale={[1, 1, 1]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial color="#5c3b28" roughness={0.9} />
      </mesh>
    </group>
  );
};

// 3. Procedural Star Anise Mesh
const StarAnise: React.FC<{ position: [number, number, number]; rotationSpeed: number; isMobile: boolean }> = ({ position, rotationSpeed, isMobile }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * delta;
      groupRef.current.rotation.z += rotationSpeed * 0.9 * delta;
    }
  });

  const petals = Array.from({ length: 8 });
  const finalScale = isMobile ? 0.08 : 0.15;

  return (
    <group ref={groupRef} position={position} scale={[finalScale, finalScale, finalScale]}>
      {petals.map((_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8]}
            rotation={[0, -angle, 0.4]}
            scale={[0.4, 0.12, 0.22]}
          >
            <coneGeometry args={[1, 3, 4]} />
            <meshStandardMaterial color="#30160b" roughness={0.9} />
          </mesh>
        );
      })}
    </group>
  );
};

// 4. Upward Moving Fire Embers Node
const EmbersSystem: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = isMobile ? 30 : 65;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * (isMobile ? 4 : 6); // X
      arr[i * 3 + 1] = Math.random() * 8 - 4;  // Y
      arr[i * 3 + 2] = (Math.random() - 0.5) * (isMobile ? 4 : 6); // Z
    }
    return arr;
  }, [particleCount, isMobile]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      const positionsAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const count = positionsAttr.count;
      for (let i = 0; i < count; i++) {
        let y = positionsAttr.getY(i);
        let x = positionsAttr.getX(i);
        y += 0.8 * delta; // rise up
        if (y > 4) {
          y = -4; // reset at bottom
          x = (Math.random() - 0.5) * (isMobile ? 4 : 6);
        }
        positionsAttr.setY(i, y);
        positionsAttr.setX(i, x + Math.sin(y * 2) * 0.005); // slight sway
      }
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ff5500"
        size={isMobile ? 0.05 : 0.065}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// 5. Hero Platter representing Signature Biryani
const HeroPlatter: React.FC<{ mouseX: number; mouseY: number; isMobile: boolean }> = ({ mouseX, mouseY, isMobile }) => {
  const platterRef = useRef<THREE.Group>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(biryaniImg, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      setTexture(tex);
    });
  }, []);

  useFrame((state, delta) => {
    if (platterRef.current) {
      // Rotating idle rotation
      platterRef.current.rotation.y += 0.15 * delta;

      // Mouse Parallax reaction
      const targetRotationX = -mouseY * 0.25;
      const targetRotationZ = mouseX * 0.25;
      platterRef.current.rotation.x += (targetRotationX - platterRef.current.rotation.x) * 0.08;
      platterRef.current.rotation.z += (targetRotationZ - platterRef.current.rotation.z) * 0.08;

      // Subtle float up and down
      platterRef.current.position.y = (isMobile ? -0.85 : 0) + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  const baseScale = isMobile ? 0.55 : 1.0;

  return (
    <group 
      ref={platterRef} 
      scale={[baseScale, baseScale, baseScale]}
      position={[0, isMobile ? -0.85 : 0, 0]}
    >
      {/* 3D Gold Metallic Outer Rim Tray */}
      <mesh position={[0, -0.15, 0]} scale={[1, 0.4, 1]}>
        <cylinderGeometry args={[2.5, 2.6, 0.4, 48]} />
        <meshStandardMaterial
          color="#d4af37" // Premium Gold
          metalness={0.9}
          roughness={0.12}
        />
      </mesh>

      {/* Plate Base (Dark Steel) */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[2.45, 2.5, 0.2, 48]} />
        <meshStandardMaterial
          color="#0f0f0f"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* High-Fidelity Food Surface mapping Biryani Texture */}
      {texture && (
        <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.45, 4.45]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.6}
            metalness={0.0}
            transparent={false}
          />
        </mesh>
      )}

      {/* Decorative Gold Rings */}
      <mesh position={[0, 0.065, 0]}>
        <ringGeometry args={[2.22, 2.25, 64]} />
        <meshStandardMaterial color="#ffaa00" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

export const Canvas3D: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, isMobile ? 3.0 : 3.5, isMobile ? 5.0 : 5.5], fov: isMobile ? 54 : 48 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={isMobile ? 1.1 : 0.9} />
        {/* Burning charcoal glows */}
        <pointLight position={[0, -1, 0]} intensity={isMobile ? 12 : 18} color="#ff3c00" distance={8} />
        {/* Soft volumetric top light */}
        <directionalLight position={[2, 6, 2]} intensity={2.5} color="#fff" />
        <directionalLight position={[-2, 6, -2]} intensity={1.5} color="#ffaa00" />

        <Float speed={1.2} rotationIntensity={isMobile ? 0.4 : 0.6} floatIntensity={0.5}>
          <HeroPlatter mouseX={mouse.x} mouseY={mouse.y} isMobile={isMobile} />
        </Float>

        {/* Floating Spices in Space */}
        <CardamomPod position={isMobile ? [-1.2, 1.2, 0.4] : [-2.4, 1.4, 0.8]} rotationSpeed={0.3} isMobile={isMobile} />
        <CardamomPod position={isMobile ? [1.4, -0.8, 0.6] : [2.6, -1.2, 1.2]} rotationSpeed={-0.2} isMobile={isMobile} />
        <ClovePod position={isMobile ? [1.0, 1.3, -0.5] : [1.8, 1.6, -1.0]} rotationSpeed={0.4} isMobile={isMobile} />
        <ClovePod position={isMobile ? [-1.1, -0.9, -0.3] : [-1.9, -1.5, -0.6]} rotationSpeed={-0.35} isMobile={isMobile} />
        <StarAnise position={isMobile ? [1.2, 0.5, 0.8] : [2.4, 0.8, 1.5]} rotationSpeed={0.25} isMobile={isMobile} />
        <StarAnise position={isMobile ? [-1.3, -0.3, 0.4] : [-2.6, -0.5, 0.6]} rotationSpeed={-0.3} isMobile={isMobile} />

        {/* Upward sparks particles */}
        <EmbersSystem isMobile={isMobile} />
      </Canvas>
    </div>
  );
};
export default Canvas3D;
