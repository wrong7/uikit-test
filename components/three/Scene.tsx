"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Nodes } from "./Nodes";
import { storeActions } from "@/lib/store/actions";
import { Scrollable } from "./elements/scrollable";

export function Scene() {
  const threeState = useThree((state) => state.get);

  useEffect(() => {
    storeActions.r3f.set({ threeState });
  }, [threeState]);

  return (
    <group>
      <Nodes />
      <Scrollable />
    </group>
  );
}
