"use client";

/** COMPONENTS */
import Canvas from "@/components/three/Canvas";

export default function Page() {
  return (
    <div className="relative flex flex-col flex-1 h-full">
      <div className="relative flex flex-col flex-1 h-full bg-neutral-100">
        <Canvas />
      </div>
    </div>
  );
}
