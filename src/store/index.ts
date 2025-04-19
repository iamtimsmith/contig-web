import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createGameSlice } from "./gameSlice";
import { createPlayerSlice } from "./playerSlice";
import type { Store } from "~/types";
import { createDiceSlice } from "./diceSlice";

export const useStore = create<Store>()(
  devtools((...a) => ({
    ...createPlayerSlice(...a),
    ...createGameSlice(...a),
    ...createDiceSlice(...a),
  }))
);
