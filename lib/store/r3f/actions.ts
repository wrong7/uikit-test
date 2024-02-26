import type { Draft } from "immer";

import type { OrbitControls } from "three-stdlib";

import type { WithState } from "@/lib/store";
import type { State } from ".";

export interface Actions {
  set: (newSettings: Partial<Omit<State, "set">>) => void;
  setOrbitControls: (orbitControls: OrbitControls) => void;
  setZoomEnabled: (zoomEnabled: boolean) => void;
  setRotationEnabled: (rotationEnabled: boolean) => void;
};

export const actions: WithState<Actions> = (set, get, store) => ({
  set: (newSettings: Partial<Omit<State, "set">>) =>
    set((state) => {
      if (Object.keys(newSettings).includes("threeState")) {
        state.r3f.threeState = newSettings.threeState;
      }
      if (Object.keys(newSettings).includes("orbitControls")) {
        state.r3f.orbitControls =
          newSettings.orbitControls as Draft<OrbitControls>;
      }
      if (Object.keys(newSettings).includes("zoomEnabled")) {
        state.r3f.zoomEnabled = newSettings.zoomEnabled!;
      }
    }),
  setOrbitControls: (orbitControls) =>
    set((state) => {
      state.r3f.orbitControls = orbitControls as Draft<OrbitControls>;
    }),
  setZoomEnabled: (zoomEnabled) =>
    set((state) => {
      state.r3f.zoomEnabled = zoomEnabled;
    }),
  setRotationEnabled: (rotationEnabled) =>
    set((state) => {
      state.r3f.rotationEnabled = rotationEnabled;
    }),
});
