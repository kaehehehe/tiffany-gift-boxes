import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function GiftBox({ index, giftBoxCount, radius, spacing }) {
  const { scene } = useGLTF("gift-box.glb");
  const model = scene.clone();
  const ref = useRef();
  const speed = 0.003;
  let angle = (index / giftBoxCount) * (2 * Math.PI);

  useFrame(() => {
    angle += speed;
    ref.current.position.x = (radius + spacing) * Math.cos(angle);
    ref.current.position.z = (radius + spacing) * Math.sin(angle);
  });

  return (
    <mesh ref={ref}>
      <primitive object={model} scale={[5, 5, 5]} />
    </mesh>
  );
}
