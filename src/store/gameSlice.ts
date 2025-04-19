import type { StateCreator } from "zustand";
import { BOARD_NUMBERS } from "~/constants";

const initialState = BOARD_NUMBERS.reduce(
  (acc, num) => ({
    ...acc,
    [num]: false,
  }),
  {}
);

export interface GameSlice {
  board: {
    [key: string]: boolean;
  };
  isGameOver: boolean;
  turn: number;
  handleNextTurn: () => void;
  handleResetGame: () => void;
  handleSelect: (num: number) => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set, get) => ({
  board: initialState,
  isGameOver: false,
  turn: 0,
  handleNextTurn: () => {},
  handleResetGame: () => {},
  handleSelect: (num: number) => {},
});
