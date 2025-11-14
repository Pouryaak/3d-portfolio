"use client";

import { useGLTF } from "@react-three/drei";
import { JSX, useEffect } from "react";
import * as THREE from "three";

export default function City(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/models/city/city.glb");

  // Enable shadows on all meshes in the GLB
  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}

// Preload model
useGLTF.preload("/models/city/city.glb");
