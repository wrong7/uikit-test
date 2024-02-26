import { useState, useEffect } from "react";

import { StateCreator, create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

import { createElementsSlice, type State as ElementsState } from "@/lib/store/elements";
import { createR3fSlice, type State as R3fState } from "@/lib/store/r3f";

export function useShallowStore<U>(callback: (state: State) => U) {
  const result = store(useShallow(callback)) as U;
  const [data, setData] = useState(result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
}

export function useStore<U>(callback: (state: State) => U) {
  const result = store(callback) as U;
  const [data, setData] = useState(result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
}

export interface State {
  r3f: R3fState;
  elements: ElementsState;
}

export const store = create<State>()(
  subscribeWithSelector(
    immer((...a) => ({
      r3f: createR3fSlice(...a),
      elements: createElementsSlice(...a),
    }))
  )
);

export type WithState<T> = StateCreator<
  State,
  [["zustand/subscribeWithSelector", never], ["zustand/immer", never]],
  [],
  T
>;
