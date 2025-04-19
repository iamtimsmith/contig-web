import type { StateCreator } from "zustand";
import { type Player } from "~/types";

export interface PlayerSlice {
  player1: Player;
  player2: Player;
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set, get) => ({
  player1: {
    name: "Player 1",
    score: 0,
    isTurn: false,
    claimed: [],
  },
  player2: {
    name: "Player 2",
    score: 0,
    isTurn: false,
    claimed: [],
  },
});
