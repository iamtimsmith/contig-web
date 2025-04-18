import { useDiceContext } from "~/contexts/Dice";
import { useGameContext } from "~/contexts/Game";
import { Button } from "~/components/Button";
import styles from "./styles.module.css";
import { diceResults } from "~/constants";

export const DiceRoller = () => {
  const { turn } = useGameContext();
  const { rolls, handleRollDice } = useDiceContext();

  // If the game has not started, do not show the dice roller
  if (turn === 0) return;

  return (
    <div className={styles.diceRoller}>
      <div>
        <Button className={styles.button} onClick={handleRollDice}>
          Roll
        </Button>
      </div>
      <span className={styles.rolls}>
        {
          // @ts-expect-error-ignore
          rolls?.map((roll) => diceResults[roll]).join(" ")
        }
      </span>
    </div>
  );
};
