// src/components/Hippo.js
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Hippo() {
  const { scene } = useGLTF("/models/hippo.glb");
  const hippoRef = useRef();

  return (
    <primitive
      ref={hippoRef}
      object={scene}
      scale={3} // Adjust the scale to fit in the box
      position={[0, -0.5, 0]} // Adjust the Y position to center the hippo
    />
  );
}
