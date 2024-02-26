import { State } from ".";

export const initialState: Omit<State, "actions"> = {
  threeState: undefined,
  orbitControls: undefined,
  zoomEnabled: true,
  rotationEnabled: false
};
