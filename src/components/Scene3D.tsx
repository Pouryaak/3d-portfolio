"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import City from "../app/City";
import HeroOverlay from "./HeroOverlay";
import HotspotSlider, { HotspotId } from "./HotspotSlider";
import HotspotButton from "./HotspotButton";

function CameraRig() {
  const { camera, gl } = useThree();
  const [targetRadius, setTargetRadius] = useState(() =>
    camera.position.length()
  );
  const radiusRef = useRef(targetRadius);

  radiusRef.current = targetRadius;

  // Handle wheel and update target radius
  useEffect(() => {
    const dom = gl.domElement;

    function onWheel(e: WheelEvent) {
      e.preventDefault();

      const delta = e.deltaY;
      const current = radiusRef.current;

      // zoom speed
      let next = current + delta * 0.01;

      // clamp to our desired zoom range
      const min = 20;
      const max = 40;
      if (next < min) next = min;
      if (next > max) next = max;

      setTargetRadius(next);
    }

    dom.addEventListener("wheel", onWheel, { passive: false });
    return () => dom.removeEventListener("wheel", onWheel as any);
  }, [gl]);

  // Smoothly move towards target radius
  useFrame(() => {
    const currentRadius = camera.position.length();
    const desiredRadius = radiusRef.current;

    const smoothed = THREE.MathUtils.lerp(currentRadius, desiredRadius, 0.12);

    const dir = camera.position.clone().normalize();
    camera.position.copy(dir.multiplyScalar(smoothed));
    camera.updateProjectionMatrix();
  });

  return null;
}

export default function Scene3D() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotId | null>(null);
  return (
    <div className="relative w-full h-full">
      <Canvas
        shadows
        camera={{ position: [40, 35, 45], fov: 40 }}
        onCreated={(state) => {
          state.gl.shadowMap.enabled = true;
          state.gl.shadowMap.type = THREE.PCFSoftShadowMap;
          state.gl.toneMapping = THREE.ACESFilmicToneMapping;
          state.gl.toneMappingExposure = 1.0;
        }}
      >
        {/* slightly warm background */}
        <color attach="background" args={["#e3dfd8"]} />

        {/* soft overall light */}
        <ambientLight intensity={0.2} />
        <hemisphereLight intensity={0.3} groundColor="#f4c998" />

        {/* warm sun from upper-right */}
        <directionalLight
          position={[10, 90, 80]}
          intensity={8}
          color="#ea9e5b"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={10}
          shadow-camera-far={200}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />

        {/* subtle environment reflections */}
        <Environment preset="sunset" />

        {/* custom smooth zoom rig */}
        <CameraRig />

        {/* city model */}
        <City />

        {!activeHotspot && (
          <>
            <Html position={[0, 5, 0]} distanceFactor={14} sprite center>
              <HotspotButton
                id="experience"
                label="Experience"
                setActiveHotspot={setActiveHotspot}
              />
            </Html>

            <Html position={[6, 0, -15]} distanceFactor={14} sprite center>
              <HotspotButton
                id="projects"
                label="Projects"
                setActiveHotspot={setActiveHotspot}
              />
            </Html>

            <Html position={[-10, 6, 4]} distanceFactor={14} sprite center>
              <HotspotButton
                id="education"
                label="Education"
                setActiveHotspot={setActiveHotspot}
              />
            </Html>

            <Html position={[11, 0, 0]} distanceFactor={16} sprite center>
              <HotspotButton
                id="skills"
                label="Skills"
                setActiveHotspot={setActiveHotspot}
              />
            </Html>

            <Html position={[-4, 4, -15]} distanceFactor={14} sprite center>
              <HotspotButton
                id="contact"
                label="Contact"
                setActiveHotspot={setActiveHotspot}
              />
            </Html>
          </>
        )}

        <OrbitControls
          enablePan={false}
          enableDamping
          enableZoom={false} // we handle zoom in CameraRig
          dampingFactor={0.03}
          zoomSpeed={0.35}
          rotateSpeed={0.1}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={-Math.PI * 1.65}
          maxAzimuthAngle={Math.PI / 1.1}
          minDistance={20}
          maxDistance={40}
        />
      </Canvas>

      <HeroOverlay />
      <HotspotSlider
        activeId={activeHotspot}
        onClose={() => setActiveHotspot(null)}
      />
    </div>
  );
}
