
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hippo from "./Hippo";
import Panda from "./Panda";
import Tree from "./Tree"; // Make sure you import Tree

const AnimalSelection = () => {
  return (
    <div style={styles.container}>
      {/* Box for Hippo */}
      <div style={styles.box}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Hippo />
        </Canvas>
      </div>

      {/* Box for Panda */}
      <div style={styles.box}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Panda />
        </Canvas>
      </div>

      {/* Box for Tree */}
      <div style={styles.box}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Tree />
        </Canvas>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "500px",
    width: "100%",
  },
  box: {
    width: "150px",
    height: "150px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default AnimalSelection;
