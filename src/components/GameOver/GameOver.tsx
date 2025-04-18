import { useGameContext } from "~/contexts/Game";

export const GameOver = () => {
  const { isGameOver } = useGameContext();

  // Don't show if game is active or has not started
  if (!isGameOver) return null;

  return (
    <div>
      <h1>Game Over!</h1>
    </div>
  );
};
