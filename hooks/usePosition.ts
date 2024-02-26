import { store } from "@/lib/store";
import { useEffect, useState } from "react";
import type { NodeElement } from "@/lib/store/elements/types";

export function usePosition(elementId: NodeElement["id"]) {
  const [position, setPosition] = useState<NodeElement["position"] | undefined>(
    store.getState().elements.items[elementId]?.position
  );

  useEffect(() =>
    store.subscribe(
      (state) => state.elements.items[elementId]?.position,
      setPosition
    ),
  [elementId]);
  return position || [0, 0, 0];
}
