import type { StateCreator } from "zustand";
import { BOARD_NUMBERS, MAX_TURNS } from "~/constants";
import { useStore } from ".";
import { getAdjacentNumbers } from "~/helpers/getAdjacentNumbers";

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
  nextTurn: (selected?: number, score?: number) => void;
  resetGame: () => void;
  selectNumber: (num: number) => void;
}

export const createGameSlice: StateCreator<GameSlice> = (set, get) => ({
  board: initialState,
  isGameOver: false,
  turn: 1,
  nextTurn: (selected?: number, score = 0) => {
    const { player1, player2, setPlayer1, setPlayer2 } = useStore.getState();
    const { turn } = get();
    // If player 2's turn, increase the turn number
    if (player2.isTurn) {
      // End the game if the max turns have been reached
      if (turn + 1 <= MAX_TURNS) {
        // Update state for players and turn
        setPlayer1({ ...player1, isTurn: true });
        setPlayer2({
          ...player2,
          score: player2.score + score,
          claimed: [...player2.claimed, ...(selected ? [selected] : [])],
          isTurn: false,
        });
        set({ turn: turn + 1 });
      } else {
        const claimed: number[] = selected
          ? [...player2.claimed, selected]
          : player2.claimed;
        // Game Over
        setPlayer2({
          ...player2,
          score: player2.score + score,
          claimed,
          isTurn: false,
        });
        set({ isGameOver: true });
      }
    }
    // If player 1's turn, switch players
    if (player1.isTurn) {
      const claimed: number[] = selected
        ? [...player1.claimed, selected]
        : player1.claimed;
      // Update state for players and turn
      setPlayer1({
        ...player1,
        score: player1.score + score,
        claimed,
        isTurn: false,
      });
      setPlayer2({ ...player2, isTurn: true });
    }
  },
  resetGame: () => {
    const { resetPlayers } = useStore.getState();
    set({
      board: initialState,
      isGameOver: false,
      turn: 1,
    });
    resetPlayers();
  },
  selectNumber: (num: number) => {
    const { board, nextTurn } = get();
    // Get a list of adjacent numbers
    const adjacent = getAdjacentNumbers(num);
    // Get the total number of selected items that touch the selected number
    const selectedAdjacentItems = adjacent.filter((num) => !!board[num]);
    // Update the board state with the selected number
    const newBoard = { ...board, [num]: !board[num] };
    set({ board: newBoard });
    // Update the score for the current player and move to next turn
    nextTurn(num, selectedAdjacentItems.length);
  },
});
