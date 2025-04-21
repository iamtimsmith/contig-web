import type { StateCreator } from "zustand";
import { type Player } from "~/types";

export interface PlayerSlice {
  player1: Player;
  player2: Player;
  setPlayer1: (player1: Player) => void;
  setPlayer2: (player2: Player) => void;
  resetPlayers: () => void;
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set, get) => ({
  player1: {
    name: "Player 1",
    score: 0,
    isTurn: true,
    claimed: [],
  },
  player2: {
    name: "Player 2",
    score: 0,
    isTurn: false,
    claimed: [],
  },
  setPlayer1: (player1: Player) => set({ player1 }),
  setPlayer2: (player2: Player) => set({ player2 }),
  resetPlayers: () => {
    const { player1, player2 } = get();
    set({
      player1: {
        ...player1,
        score: 0,
        claimed: [],
        isTurn: true,
      },
      player2: {
        ...player2,
        score: 0,
        claimed: [],
        isTurn: false,
      },
    });
  },
});
