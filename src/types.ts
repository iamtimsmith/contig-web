import type { DiceSlice } from "./store/diceSlice";
import type { GameSlice } from "./store/gameSlice";
import type { PlayerSlice } from "./store/playerSlice";

export type Store = PlayerSlice & GameSlice & DiceSlice;

export interface Player {
  name: string;
  score: number;
  isTurn: boolean;
  claimed: number[];
}
