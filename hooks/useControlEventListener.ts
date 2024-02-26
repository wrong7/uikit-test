import { useStore } from "@/lib/store";
import { useEffect } from "react";
import type { OrbitControls } from "three-stdlib";

export function useControlEventListener<T extends "change" | "start" | "end">(eventName: T, listener: (event: THREE.Event<T, OrbitControls>) => void) {
  const orbitControls = useStore((state) => state.r3f.orbitControls!);

  useEffect(() => {
    orbitControls?.addEventListener(eventName, listener);
    return () => {
      orbitControls?.removeEventListener(eventName, listener);
    };
  }, [orbitControls]);
}
