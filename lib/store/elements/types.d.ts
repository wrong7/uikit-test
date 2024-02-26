import type { Euler } from "@react-three/fiber";

interface NodeElement {
  readonly id: string;
  readonly type: "node";
  selected: boolean;
  editing: boolean;
  position: [x: number, y: number, z: number];
  rotation: Euler;
  color: string;
  width: number;
  height: number;
  shape: "rectangle" | "circle" | "triangle";
  content: string;
}
