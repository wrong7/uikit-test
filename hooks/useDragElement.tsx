import { storeActions } from "@/lib/store/actions";

import { useDrag } from "@use-gesture/react";
import { GroupProps, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { NodeElement } from "@/lib/store/elements/types";

export function useDragElement(
  elementId: NodeElement["id"],
  elementPosition: NodeElement["position"]
) {
  const { size, camera } = useThree();

  return useDrag(
    ({
      active,
      event,
      xy: [x, y],
      initial: [initialX, initialY],
      movement,
      memo,
    }) => {
      if (Math.abs(movement[0]) + Math.abs(movement[1]) < 10) return;
      event.stopPropagation();
      const initialDelta =
        memo ||
        new Vector3(
          (initialX / size.width) * 2 - 1,
          -(initialY / size.height) * 2 + 1,
          0
        )
          .unproject(camera)
          .multiply({ x: 1, y: 1, z: 0 })
          .clone()
          .sub(new Vector3(...elementPosition));
      storeActions.elements.update(elementId, {
        position: new Vector3(
          (x / size.width) * 2 - 1,
          -(y / size.height) * 2 + 1,
          0
        )
          .unproject(camera)
          .multiply({ x: 1, y: 1, z: 0 })
          .clone()
          .sub(initialDelta)
          .toArray(),
      });
      return initialDelta;
    }
  ) as () => GroupProps;
}
