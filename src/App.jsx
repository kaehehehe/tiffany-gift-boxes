import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GiftBox } from "./components/GiftBox";
import "./styles.css";

const giftBoxConfigurations = [
  { count: 30, radius: 50, spacing: 50 },
  { count: 20, radius: 45, spacing: 30 },
  { count: 10, radius: 30, spacing: 20 },
  { count: 8, radius: 10, spacing: 15 },
];

const renderGiftBoxes = (config) => {
  return Array.from({ length: config.count }, (_, index) => (
    <GiftBox
      key={index}
      index={index}
      giftBoxCount={config.count}
      radius={config.radius}
      spacing={config.spacing}
    />
  ));
};

export default function App() {
  return (
    <Canvas
      camera={{
        position: [0, 50, 70],
        near: 1,
        far: 1500,
        fov: 75,
      }}
    >
      <ambientLight intensity={1} />
      <Environment preset="warehouse" />

      {giftBoxConfigurations.map(renderGiftBoxes)}

      <OrbitControls minDistance={5} maxDistance={200} />
    </Canvas>
  );
}
