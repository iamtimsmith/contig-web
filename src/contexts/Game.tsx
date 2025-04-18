import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { boardNumbers, maxTurns } from "~/constants";
import { getAdjacentNumbers } from "~/helpers/getAdjacentItems";
import { Player } from "~/types";

const initialState = boardNumbers.reduce(
  (acc, num) => ({
    ...acc,
    [num]: false,
  }),
  {}
);

export interface GameContextType {
  board: {
    [key: string]: boolean;
  };
  isGameOver: boolean;
  player1: Player;
  player2: Player;
  turn: number;
  handleNextTurn: () => void;
  handleResetGame: () => void;
  handleSelect: (num: number) => void;
}

export const GameContext = createContext<GameContextType>({
  board: initialState,
  isGameOver: false,
  player1: {
    name: "",
    score: 0,
    isTurn: false,
    claimed: [],
  },
  player2: {
    name: "",
    score: 0,
    isTurn: false,
    claimed: [],
  },
  turn: 0,
  handleNextTurn: () => {},
  handleResetGame: () => {},
  handleSelect: () => {},
});

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  // Track the state of the board items
  const [board, setBoard] = useState<typeof initialState>(initialState);
  // Track the number of turns
  const [turn, setTurn] = useState(0);
  // Is the game over?
  const [isGameOver, setIsGameOver] = useState(false);
  // Track Player 1 info
  const [player1, setPlayer1] = useState<Player>({
    name: "Player 1",
    score: 0,
    isTurn: false,
    claimed: [],
  });
  // Track Player 2 info
  const [player2, setPlayer2] = useState<Player>({
    name: "Player 2",
    score: 0,
    isTurn: false,
    claimed: [],
  });

  const handleResetGame = () => {
    setBoard(initialState);
    setTurn(1);
    setIsGameOver(false);
    setPlayer1({
      name: "Player 1",
      score: 0,
      isTurn: true,
      claimed: [],
    });
    setPlayer2({
      name: "Player 2",
      score: 0,
      isTurn: false,
      claimed: [],
    });
  };

  const handleNextTurn = (selected?: number, score = 0) => {
    // If the game has started
    if (turn > 0) {
      // If player 2's turn, increase the turn number
      if (player2.isTurn) {
        // End the game if the max turns have been reached
        if (turn + 1 <= maxTurns) {
          // Update state for players and turn
          setPlayer1({ ...player1, isTurn: true });
          setPlayer2((state) => ({
            ...player2,
            score: state.score + score,
            claimed: [...state.claimed, ...(selected ? [selected] : [])],
            isTurn: false,
          }));
          setTurn(turn + 1);
        } else {
          // Game Over
          setPlayer2((state) => ({
            ...player2,
            score: state.score + score,
            claimed: [...state.claimed, ...(selected ? [selected] : [])],
            isTurn: false,
          }));
          setIsGameOver(true);
        }
      }
      // If player 1's turn, switch players
      if (player1.isTurn) {
        // Update state for players and turn
        setPlayer1((state) => ({
          ...player1,
          score: state.score + score,
          claimed: [...state.claimed, ...(selected ? [selected] : [])],
          isTurn: false,
        }));
        setPlayer2({ ...player2, isTurn: true });
      }
    } else {
      setPlayer1({ ...player1, isTurn: true });
      setTurn(turn + 1);
    }
  };

  const handleSelect = (num: number) => {
    // Get a list of adjacent numbers
    const adjacent = getAdjacentNumbers(num);
    // Get the total number of selected items that touch the selected number
    // @ts-expect-error-ignore
    const selectedAdjacentItems = adjacent.filter((num) => !!board[num]);
    // Update the board state with the selected number
    // @ts-expect-error-ignore
    setBoard({ ...board, [num]: !board[num] });
    // Update the score for the current player and move to next turn
    handleNextTurn(num, selectedAdjacentItems.length);
  };

  return (
    <GameContext.Provider
      value={{
        board,
        isGameOver,
        player1,
        player2,
        turn,
        handleNextTurn,
        handleResetGame,
        handleSelect,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
