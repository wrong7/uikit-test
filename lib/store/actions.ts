import { store } from ".";

export const storeActions = {
  r3f: store.getState().r3f.actions,
  elements: store.getState().elements.actions,
} as const;
