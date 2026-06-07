import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

function AiCore() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state, delta) => {
    // Slow majestic rotations for the outer rings and shells
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.1;
      outerRef.current.rotation.y += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.2;
      ring1Ref.current.rotation.y += delta * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.1;
      ring2Ref.current.rotation.z += delta * 0.2;
    }
    // Very subtle mouse parallax on the whole group
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Inner Liquid Core - High Tech Ai Brain */}
        <mesh>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial 
            color="#4f46e5" 
            distort={0.4} 
            speed={3} 
            roughness={0.1} 
            metalness={0.9} 
            emissive="#1e1b4b"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Abstract Wireframe Outer Shell */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshBasicMaterial color="#c0c1ff" wireframe transparent opacity={0.15} />
        </mesh>

        {/* Outer Tech Orbit Ring 1 (Primary) */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.6, 0.015, 16, 100]} />
          <meshStandardMaterial color="#c0c1ff" emissive="#c0c1ff" emissiveIntensity={0.8} />
        </mesh>

        {/* Outer Tech Orbit Ring 2 (Accent) */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.9, 0.015, 16, 100]} />
          <meshStandardMaterial color="#FDBC40" emissive="#FDBC40" emissiveIntensity={1} />
        </mesh>
        
        {/* Inner Accent Ring */}
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#34C759" emissive="#34C759" emissiveIntensity={0.6} transparent opacity={0.7}/>
        </mesh>

        {/* Data Particles (Stars / Sparkles) */}
        <Sparkles count={500} scale={12} size={1.2} speed={0.4} opacity={0.5} color="#ffffff" />
        <Sparkles count={200} scale={8} size={2.5} speed={0.8} opacity={0.8} color="#FDBC40" />
        <Sparkles count={300} scale={10} size={2} speed={0.6} opacity={0.7} color="#c0c1ff" />
      </Float>
    </group>
  );
}

export function AbstractNetwork() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent flex items-center justify-center pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#0F0F13', 5, 20]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#4f46e5" />
        <pointLight position={[0, 5, 5]} intensity={1} color="#c0c1ff" />
        <AiCore />
      </Canvas>
    </div>
  );
}
