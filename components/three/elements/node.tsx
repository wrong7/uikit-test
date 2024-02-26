import { useShallowStore } from "@/lib/store";
import { Text } from "@react-three/drei";
import { useDragElement } from "@/hooks/useDragElement";
import { usePosition } from "@/hooks/usePosition";
import type { NodeElement } from "@/lib/store/elements/types";

import { type ComponentInternals, Container, Root } from "@react-three/uikit";

interface NodeElementProps extends React.HTMLAttributes<HTMLDivElement> {
  elementId: NodeElement["id"];
  preview?: boolean;
}

export function NodeElement({ elementId, ...props }: NodeElementProps) {
  const element = useShallowStore(
    (state) => ({
      color: state.elements.items[elementId]?.color,
      width: state.elements.items[elementId]?.width,
      height: state.elements.items[elementId]?.width,
      shape: state.elements.items[elementId]?.shape,
      editing: state.elements.items[elementId]?.editing,
      content: state.elements.items[elementId]?.content,
    })
  );

  const position = usePosition(elementId);

  const bind = useDragElement(elementId, position);

  return (
    <group
      name={elementId}
      position={position}
    >
      <Root
        backgroundColor={element.color}
        backgroundOpacity={0.9}
        pixelSize={0.02}
        borderRadius={16}
        anchorX="right"
        hover={{ transformScaleY: 1.1 }}
        sizeX={element.width}
        sizeY={element.height}
        {...bind() as Partial<ComponentInternals>}
      >
        <Container
        >
          <Text
            position={[0, -element.height / 2, 0.1]}
            maxWidth={element.width - 1}
            fontSize={1}
            textAlign="center"
            color={"red"}>{element.content}</Text>
        </Container>
      </Root>
    </group>
  );
}