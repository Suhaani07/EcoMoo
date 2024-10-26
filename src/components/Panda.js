// src/components/Panda.js
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Panda() {
  const { scene } = useGLTF("/models/panda.glb");
  const pandaRef = useRef();

  return (
    <primitive
      ref={pandaRef}
      object={scene}
      scale={2} // Adjust the scale as needed
      position={[0, -0.5, 0]} // Adjust the Y position to center the panda
    />
  );
}
