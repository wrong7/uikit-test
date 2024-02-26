"use client";

import {
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Perf } from "r3f-perf";

export default function ThreeCanvas() {
  return (
    <Canvas
      id="board"
      flat
      gl={{ localClippingEnabled: true }}
    >
      <directionalLight color="white" position={[-10, 10, 5]} />
      <OrbitControls
        zoomSpeed={1.1}
        enableRotate={false}
        panSpeed={1}
        dampingFactor={1}
        enableZoom={true}
        zoomToCursor
        makeDefault
      />

      <OrthographicCamera makeDefault position={[0, 0, 500]} zoom={10} />
      {process.env.NODE_ENV === "development" && (
        <Perf position="top-left" />
      )}
      <Scene />
    </Canvas>
  );
}

