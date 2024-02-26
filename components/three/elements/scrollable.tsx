import { useThree } from "@react-three/fiber";
import { Root, Container, Image } from "@react-three/uikit";
import { useMemo, useRef } from "react";

import { signal } from "@preact/signals-core";
import { useControlEventListener } from "@/hooks/useControlEventListener";

export function Scrollable() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, viewport } = useThree();

  const scale = useMemo(() => {
    return signal(10 / camera.zoom);
  }, []);

  useControlEventListener("change", () => {
    scale.value = 10 / camera.zoom;
    groupRef.current?.position.set(camera.position.x, camera.position.y, 10);
  });
  
  return (
    <group ref={groupRef} position={[camera.position.x, camera.position.y, 10]}>
      <Root
        flexDirection="row"
        transformScale={1}
        precision={0.01}
        pixelSize={0.2}
        alignItems="center"
        transformScaleY={scale}
        transformScaleX={scale}
        sizeX={viewport.width}
        sizeY={viewport.height}
      >
        <Container
          overflow="scroll"
          flexDirection="column"
          backgroundColor={"black"}
          width="20%"
          height="100%"
        >
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
          <Container width={"100%"} backgroundColor={"red"}>
            <Image
              src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
            />
          </Container>
        </Container>
      </Root>
    </group>
  )
}