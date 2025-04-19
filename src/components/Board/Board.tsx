import { Button } from "~/components/Button";
import styles from "./styles.module.css";
import { getWinner } from "~/helpers/getWinner";
import { useStore } from "~/store";
import clsx from "clsx";

export const Board = () => {
  const { board, isGameOver, player1, player2 } = useStore();

  return (
    <div className={styles.board}>
      {isGameOver && (
        <div className={styles.gameOver}>
          <p>Game Over!</p>
          <p className={styles.winner}>{getWinner(player1, player2)}</p>
          <Button variant="primary">New Game</Button>
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
            // onClick={handleNextTurn}
            // disabled={!rolls}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
