import type { State, WithState } from "@/lib/store";

type ValueOf<T> = T[keyof T];

export interface Actions {
  update: (id: string, params: Partial<ValueOf<State["elements"]["items"]>>) => void;
}

export const actions: WithState<Actions> = (set, get, store) => ({
  update: (id: string, params: Partial<ValueOf<State["elements"]["items"]>>) => {
    if(typeof id === "string")
      set((state) => {
        state.elements.items[id] = {
          ...state.elements.items[id],
          ...params
        };
      });
  }
});
