import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SPEED = 0.003;
const SCALE = [5, 5, 5];

const calculateAngle = (index, giftBoxCount) => {
  return (index / giftBoxCount) * (2 * Math.PI);
};

export function GiftBox({ index, giftBoxCount, radius, spacing }) {
  const { scene } = useGLTF("gift-box.glb");
  const model = scene.clone();
  const ref = useRef();
  let angle = calculateAngle(index, giftBoxCount);

  useFrame(() => {
    angle += SPEED;
    ref.current.position.x = (radius + spacing) * Math.cos(angle);
    ref.current.position.z = (radius + spacing) * Math.sin(angle);
  });

  return (
    <mesh ref={ref}>
      <primitive object={model} scale={SCALE} />
    </mesh>
  );
}
