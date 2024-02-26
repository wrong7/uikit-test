import { State } from ".";

export const initialState: Omit<State, "actions"> = {
  items: {
    "0": {
      id: "0",
      type: "node",
      shape: "rectangle",
      selected: false,
      editing: false,
      height: 10,
      width: 10,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      color: "white",
      content: "Drag me"
    },
    "1": {
      id: "1",
      type: "node",
      shape: "rectangle",
      selected: false,
      editing: false,
      height: 10,
      width: 10,
      position: [0, 20, 0],
      rotation: [0, 0, 0],
      color: "white",
      content: "Drag me too"
    }
  }
};
