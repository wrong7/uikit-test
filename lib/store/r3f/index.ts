import type { OrbitControls } from "three-stdlib";
import type { Camera, RootState } from "@react-three/fiber";

import type { WithState } from "@/lib/store";

import { actions, type Actions } from "./actions";
import { GetState } from "zustand";
import { initialState } from "./initial";

export interface State {
  threeState: GetState<RootState> | undefined;
  orbitControls?: OrbitControls;
  zoomEnabled: boolean;
  rotationEnabled: boolean;
  actions: Actions;
}

export const createR3fSlice: WithState<State> = (...a) => ({
  ...initialState,
  actions: actions(...a),
});
