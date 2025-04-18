import clsx from "clsx";
import { useGameContext } from "~/contexts/Game";
import styles from "./styles.module.css";
import { getWinner } from "~/helpers/getWinner";
import { Button } from "~/components/Button";
import { useDiceContext } from "~/contexts/Dice";

export const Board = () => {
  const {
    board,
    handleResetGame,
    handleSelect,
    isGameOver,
    player1,
    player2,
    turn,
  } = useGameContext();
  const { rolls, handleResetDice } = useDiceContext();

  const handleReset = () => {
    handleResetGame();
    handleResetDice();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNextTurn = (e: any) => {
    const item = Number(e.target.innerText);
    handleSelect(item);
    handleResetDice();
  };

  // If the game has not started, do not show the board
  if (turn === 0) return;

  return (
    <div className={styles.board}>
      {isGameOver && (
        <div className={styles.gameOver}>
          <p>Game Over!</p>
          <p className={styles.winner}>{getWinner(player1, player2)}</p>
          <Button variant="primary" onClick={handleReset}>
            New Game
          </Button>
          <Button variant="secondary">Settings</Button>
        </div>
      )}
      <div className={clsx([styles.grid, isGameOver && styles.disabled])}>
        {Object.keys(board).map((item) => (
          <button
            className={clsx([
              styles.item,
              player1.claimed.includes(Number(item)) && styles.player1,
              player2.claimed.includes(Number(item)) && styles.player2,
            ])}
            onClick={handleNextTurn}
            disabled={!rolls}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
