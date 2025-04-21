import { Button } from "~/components/Button";
import styles from "./styles.module.css";
import { DICE_RESULTS } from "~/constants";
import { useStore } from "~/store";

export const DiceRoller = () => {
  const { isGameOver, rolls, rollDice } = useStore();

  if (isGameOver) return <p />;

  return (
    <div className={styles.diceRoller}>
      <div>
        <Button className={styles.button} onClick={rollDice}>
          Roll
        </Button>
      </div>
      <span className={styles.rolls}>
        {
          // @ts-expect-error-ignore
          rolls?.map((roll) => DICE_RESULTS[roll]).join(" ")
        }
      </span>
    </div>
  );
};
