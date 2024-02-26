"use client";
import { useShallowStore } from "@/lib/store";
import { NodeElement } from "./elements/node";

export function Nodes() {
  const nodeIds = useShallowStore((state) =>
    Object.values(state.elements.items).map((element) => element.id)
  );

  return (
    <group name="nodes">
      {nodeIds.map((elementId) => (
        <NodeElement key={elementId} elementId={elementId} />
      ))}
    </group>
  );
}
