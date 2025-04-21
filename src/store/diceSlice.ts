import type { StateCreator } from "zustand";

export interface DiceSlice {
  rolls: number[] | null;
  rollDice: () => void;
  resetDice: () => void;
}

export const createDiceSlice: StateCreator<DiceSlice> = (set, get) => ({
  rolls: null,
  rollDice: () => {
    const rolledValues = Array.from(
      { length: 3 },
      () => Math.floor(Math.random() * 6) + 1
    );
    set({ rolls: rolledValues });
  },
  resetDice: () => {
    set({ rolls: null });
  },
});
