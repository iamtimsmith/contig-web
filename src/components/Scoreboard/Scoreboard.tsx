import { useGameContext } from "~/contexts/Game";
import clsx from "clsx";
import styles from "./styles.module.css";

export const Scoreboard = () => {
  const { player1, player2, turn } = useGameContext();

  // If the game has not started, do not show the scoreboard
  if (turn === 0) return null;

  return (
    <div className={styles.scoreboard}>
      <p className={styles.title}>Score</p>
      <div className={styles.info}>
        <p>Turn: {turn}</p>
        <p className={clsx([player1.isTurn && styles.isTurn])}>
          <span>{player1.name}</span>: {player1.score}
        </p>
        <p className={clsx([player2.isTurn && styles.isTurn])}>
          <span>{player2.name}</span>: {player2.score}
        </p>
      </div>
    </div>
  );
};
