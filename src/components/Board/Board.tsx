import clsx from "clsx";
import { useGameContext } from "~/contexts/Game";
import styles from "./styles.module.css";
import { getWinner } from "~/helpers/getWinner";
import { Button } from "~/components/Button";

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

  // If the game has not started, do not show the board
  if (turn === 0) return;

  return (
    <div className={styles.board}>
      {isGameOver && (
        <div className={styles.gameOver}>
          <p>Game Over!</p>
          <p className={styles.winner}>{getWinner(player1, player2)}</p>
          <Button variant="primary" onClick={handleResetGame}>
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
            onClick={() => handleSelect(Number(item))}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
