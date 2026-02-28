import { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import PropTypes from "prop-types";
import * as THREE from "three";

function EnergyOrb() {
  const pulse = useMemo(() => new THREE.Color("#57d6ff"), []);
  return (
    <mesh>
      <icosahedronGeometry args={[1.2, 3]} />
      <meshStandardMaterial
        color={pulse}
        emissive={pulse}
        emissiveIntensity={0.6}
        transparent
        opacity={0.88}
        roughness={0.35}
        metalness={0.3}
      />
    </mesh>
  );
}

function HaloRings() {
  const rings = useMemo(
    () =>
      new Array(3).fill().map((_, index) => ({
        radius: 1.6 + index * 0.45,
        speed: 0.6 + index * 0.2,
        color: index === 1 ? "#38bef0" : "#57d6ff",
      })),
    []
  );

  useFrame(({ clock, scene }) => {
    const time = clock.getElapsedTime();
    rings.forEach((ring, i) => {
      const mesh = scene.getObjectByName(`ring-${i}`);
      if (mesh) {
        mesh.rotation.z = time * ring.speed * 0.3;
        mesh.material.opacity = 0.4 + Math.sin(time * 0.6 + i) * 0.25;
      }
    });
  });

  return (
    <group>
      {rings.map((ring, index) => (
        <mesh key={ring.radius} rotation={[Math.PI / 2, 0, 0]} name={`ring-${index}`}>
          <torusGeometry args={[ring.radius, 0.015, 32, 256]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={1.2}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const pts = new Float32Array(400 * 3);
    for (let i = 0; i < 400; i += 1) {
      const r = 6;
      pts[i * 3] = THREE.MathUtils.randFloatSpread(r);
      pts[i * 3 + 1] = THREE.MathUtils.randFloatSpread(r);
      pts[i * 3 + 2] = THREE.MathUtils.randFloatSpread(r);
    }
    return pts;
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(400 * 3);
    const c1 = new THREE.Color("#57d6ff");
    const c2 = new THREE.Color("#38bef0");
    for (let i = 0; i < 400; i += 1) {
      const color = i % 2 === 0 ? c1 : c2;
      arr.set(color.toArray(), i * 3);
    }
    return arr;
  }, []);

  useFrame(({ clock, scene }) => {
    const time = clock.getElapsedTime();
    const particles = scene.getObjectByName("particles");
    if (particles) {
      particles.rotation.y = time * 0.08;
      particles.rotation.x = Math.sin(time * 0.05) * 0.15;
    }
  });

  return (
    <points name="particles">
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function HeroScene({ className }) {
  return (
    <Canvas className={className} dpr={[1, 1.8]}>
      <color attach="background" args={["#101622"]} />
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0.2, 6]} fov={58} />
        <Environment resolution={256} background={false}>
          <Lightformer form="circle" intensity={8} position={[0, 0, 6]} scale={[10, 10, 1]} />
          <Lightformer form="ring" intensity={4} position={[-4, 1, -4]} scale={[6, 6, 1]} />
        </Environment>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} castShadow shadow-mapSize={[512, 512]} />
        <directionalLight position={[-3, -2, -2]} intensity={0.6} />
        <PresentationControls
          global
          zoom={0.9}
          rotation={[0.2, 0.2, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
          config={{ mass: 1, tension: 120, friction: 26 }}
        >
          <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
            <group>
              <EnergyOrb />
              <HaloRings />
            </group>
          </Float>
        </PresentationControls>
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}

HeroScene.propTypes = {
  className: PropTypes.string,
};

HeroScene.defaultProps = {
  className: "",
};

export default HeroScene;
