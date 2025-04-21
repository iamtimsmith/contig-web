import { useStore } from "~/store";

export const TurnHelpText = () => {
  const { isGameOver, player1, player2, rolls } = useStore();

  if (isGameOver) return;

  const playerTurn = `It's ${
    player1.isTurn ? player1.name : player2.name
  }'s turn.`;
  const instructions = !rolls
    ? "Click the Roll button to get your numbers."
    : "Click the square with your selected number.";

  return (
    <p>
      {playerTurn} {instructions}
    </p>
  );
};
