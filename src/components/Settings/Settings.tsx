import { useStore } from "~/store";
import styles from "./styles.module.css";
import type { ChangeEvent } from "react";

export const Settings = () => {
  const { player1, player2, changeMaxTurns, turn, setPlayer1, setPlayer2 } =
    useStore();

  const changePlayer1Name = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer1({ ...player1, name: e.target.value });
  };

  const changePlayer2Name = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer2({ ...player2, name: e.target.value });
  };

  return (
    <>
      <div className={styles.group} data-label="Player 1 Settings">
        <label htmlFor="p1name">Name:</label>
        <input
          id="p1name"
          name="p1name"
          value={player1.name}
          onChange={changePlayer1Name}
        />
      </div>
      <div className={styles.group} data-label="Player 2 Settings">
        <label htmlFor="p2name">Name:</label>
        <input
          id="p2name"
          name="p2name"
          value={player2.name}
          onChange={changePlayer2Name}
        />
      </div>
      <div className={styles.group} data-label="Game Settings">
        <label htmlFor="maxTurns">Number of Turns:</label>
        <input
          type="number"
          min="1"
          max="10"
          defaultValue={1}
          id="maxTurns"
          name="maxTurns"
          onChange={(e) => changeMaxTurns(Number(e.target.value))}
        />
      </div>
    </>
  );
};
