import { actions } from "./actions";
import { initialState } from "./initial";

import type { WithState } from "@/lib/store";
import type { NodeElement } from "./types";
import type { Actions } from "./actions";

export interface State {
  items: {
    [key: string]: NodeElement;
  };
  actions: Actions;
}

export const createElementsSlice: WithState<State> = (set, get, store) => {
  return {
    ...initialState,
    actions: actions(set, get, store),
  };
};
